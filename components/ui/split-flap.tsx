"use client"

import * as React from "react"
import { motion, useAnimation } from "motion/react"
import { cn } from "@/lib/utils"

// ============================================================================
// Preset Item Sets
// ============================================================================

// Character sets
export const ALPHA = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
export const NUMERIC = "0123456789".split("")
export const ALPHANUMERIC = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
export const HEX = "0123456789ABCDEF".split("")

// Color palettes
export const RAINBOW = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6"]
export const GRAYSCALE = ["#000000", "#333333", "#666666", "#999999", "#cccccc", "#ffffff"]

// ============================================================================
// CharacterHalf - Renders top or bottom half of a character
// ============================================================================

interface CharacterHalfProps {
  char: string
  half: "top" | "bottom"
  flapColor: string
  isColorItem: boolean
  render?: (item: string, index: number) => React.ReactNode
  itemIndex: number
}

const CharacterHalf: React.FC<CharacterHalfProps> = ({
  char,
  half,
  flapColor,
  isColorItem,
  render,
  itemIndex,
}) => {
  const isTop = half === "top"

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        isTop ? "rounded-t-[0.1em]" : "rounded-b-[0.1em]"
      )}
      style={{
        backgroundColor: flapColor,
        // Clip to show only top or bottom half
        clipPath: isTop ? "inset(0 0 50% 0)" : "inset(50% 0 0 0)",
      }}
    >
      {/* Character content */}
      {render ? (
        render(char, itemIndex)
      ) : !isColorItem ? (
        <span
          className="absolute inset-0 flex items-center justify-center font-bold leading-none"
          style={{
            color: "white",
            mixBlendMode: "difference",
            zIndex: 40,
          }}
        >
          {char}
        </span>
      ) : null}
    </div>
  )
}

// ============================================================================
// FlapFace - A single face of a flap with backface-visibility
// ============================================================================

interface FlapFaceProps {
  char: string
  half: "top" | "bottom"
  flapColor: string
  isColorItem: boolean
  isBack?: boolean
  render?: (item: string, index: number) => React.ReactNode
  itemIndex: number
}

const FlapFace: React.FC<FlapFaceProps> = ({
  char,
  half,
  flapColor,
  isColorItem,
  isBack = false,
  render,
  itemIndex,
}) => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: isBack ? "rotateX(180deg)" : "rotateX(0deg)",
      }}
    >
      <CharacterHalf
        char={char}
        half={half}
        flapColor={flapColor}
        isColorItem={isColorItem}
        render={render}
        itemIndex={itemIndex}
      />
    </div>
  )
}

// ============================================================================
// SplitFlapCell - Atomic index-based flap with 3D transforms
// ============================================================================

export interface SplitFlapCellProps {
  index: number
  items: readonly string[]
  render?: (item: string, index: number) => React.ReactNode
  className?: string
  style?: React.CSSProperties
  flipSpeed?: number
  onFlipComplete?: () => void
}

const SplitFlapCell = React.forwardRef<HTMLDivElement, SplitFlapCellProps>(
  (
    {
      index,
      items,
      render,
      className,
      style,
      flipSpeed = 80,
      onFlipComplete,
    },
    ref
  ) => {
    // Normalize index to valid range
    const normalizedIndex = ((index % items.length) + items.length) % items.length

    const [currentIndex, setCurrentIndex] = React.useState(normalizedIndex)
    const [isFlipping, setIsFlipping] = React.useState(false)
    const targetIndexRef = React.useRef(normalizedIndex)
    const isFlippingRef = React.useRef(false)

    // Animation controls
    const topFlapControls = useAnimation()
    const bottomFlapControls = useAnimation()

    // Get next index (unidirectional forward cycling)
    const getNextIndex = React.useCallback(
      (idx: number) => (idx + 1) % items.length,
      [items.length]
    )

    const nextIndex = getNextIndex(currentIndex)
    const currentItem = items[currentIndex]
    const nextItem = items[nextIndex]

    // Check if this is a color item (starts with #)
    const isColorItem = currentItem?.startsWith?.("#")
    const currentFlapColor = isColorItem ? currentItem : "currentColor"
    const nextFlapColor = isColorItem ? nextItem : "currentColor"

    // Single flip animation
    const performFlip = React.useCallback(async () => {
      const flipDuration = flipSpeed / 1000

      // Animate top flap rotating down (0 to -90 degrees)
      // and bottom flap coming into view (90 to 0 degrees) simultaneously
      await Promise.all([
        topFlapControls.start({
          rotateX: -90,
          transition: {
            duration: flipDuration,
            ease: [0.45, 0.05, 0.55, 0.95], // ease-in-out for realistic motion
          },
        }),
        bottomFlapControls.start({
          rotateX: 0,
          transition: {
            duration: flipDuration,
            ease: [0.45, 0.05, 0.55, 0.95],
            delay: flipDuration * 0.3, // Slight delay for staggered feel
          },
        }),
      ])

      // Advance to next character
      setCurrentIndex((prev) => getNextIndex(prev))

      // Reset flap positions instantly
      topFlapControls.set({ rotateX: 0 })
      bottomFlapControls.set({ rotateX: 90 })
    }, [flipSpeed, topFlapControls, bottomFlapControls, getNextIndex])

    // Main flip loop
    const runFlipSequence = React.useCallback(async () => {
      if (isFlippingRef.current) return
      isFlippingRef.current = true
      setIsFlipping(true)

      // Keep flipping until we reach target
      while (true) {
        // Check current state
        const current = await new Promise<number>((resolve) => {
          setCurrentIndex((prev) => {
            resolve(prev)
            return prev
          })
        })

        if (current === targetIndexRef.current) {
          break
        }

        await performFlip()
      }

      isFlippingRef.current = false
      setIsFlipping(false)
      onFlipComplete?.()
    }, [performFlip, onFlipComplete])

    // Detect index prop changes and start flipping
    React.useEffect(() => {
      const targetIndex = ((index % items.length) + items.length) % items.length
      targetIndexRef.current = targetIndex

      if (currentIndex !== targetIndex && !isFlippingRef.current) {
        runFlipSequence()
      }
    }, [index, items.length, currentIndex, runFlipSequence])

    // Initialize flap positions
    React.useEffect(() => {
      topFlapControls.set({ rotateX: 0 })
      bottomFlapControls.set({ rotateX: 90 })
    }, [topFlapControls, bottomFlapControls])

    const halfHeight = "0.55em"
    const gap = "0.03em"

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex flex-col items-center", className)}
        style={{
          perspective: "300px",
          perspectiveOrigin: "50% 50%",
          width: "0.85em",
          height: `calc(${halfHeight} * 2 + ${gap})`,
          ...style,
        }}
      >
        {/* Top section container */}
        <div
          className="relative"
          style={{
            width: "100%",
            height: halfHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Static top - always shows current character top half */}
          <div
            className="absolute inset-0 overflow-hidden rounded-t-[0.1em]"
            style={{
              backgroundColor: currentFlapColor,
              clipPath: "inset(0 0 0 0)",
              zIndex: 5,
            }}
          >
            {render ? (
              render(currentItem, currentIndex)
            ) : !isColorItem ? (
              <span
                className="absolute inset-0 flex items-center justify-center font-bold leading-none"
                style={{
                  color: "white",
                  mixBlendMode: "difference",
                  zIndex: 40,
                  // Position text so only top half is visible
                  transform: "translateY(25%)",
                }}
              >
                {currentItem}
              </span>
            ) : null}
          </div>

          {/* Flipping top flap - front shows current top, back shows next top */}
          <motion.div
            className="absolute inset-0"
            animate={topFlapControls}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center bottom",
              zIndex: 10,
              willChange: "transform",
            }}
          >
            {/* Front face - current character top half */}
            <div
              className="absolute inset-0 overflow-hidden rounded-t-[0.1em]"
              style={{
                backgroundColor: currentFlapColor,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {render ? (
                render(currentItem, currentIndex)
              ) : !isColorItem ? (
                <span
                  className="absolute inset-0 flex items-center justify-center font-bold leading-none"
                  style={{
                    color: "white",
                    mixBlendMode: "difference",
                    zIndex: 40,
                    transform: "translateY(25%)",
                  }}
                >
                  {currentItem}
                </span>
              ) : null}
            </div>

            {/* Back face - next character top half (rotated 180 degrees) */}
            <div
              className="absolute inset-0 overflow-hidden rounded-b-[0.1em]"
              style={{
                backgroundColor: nextFlapColor,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            >
              {render ? (
                render(nextItem, nextIndex)
              ) : !(nextItem?.startsWith?.("#")) ? (
                <span
                  className="absolute inset-0 flex items-center justify-center font-bold leading-none"
                  style={{
                    color: "white",
                    mixBlendMode: "difference",
                    zIndex: 40,
                    transform: "translateY(25%)",
                  }}
                >
                  {nextItem}
                </span>
              ) : null}
            </div>
          </motion.div>
        </div>

        {/* Gap between top and bottom */}
        <div style={{ height: gap, backgroundColor: "transparent" }} />

        {/* Bottom section container */}
        <div
          className="relative"
          style={{
            width: "100%",
            height: halfHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Static bottom - always shows current character bottom half */}
          <div
            className="absolute inset-0 overflow-hidden rounded-b-[0.1em]"
            style={{
              backgroundColor: currentFlapColor,
              clipPath: "inset(0 0 0 0)",
              zIndex: 5,
            }}
          >
            {render ? (
              render(currentItem, currentIndex)
            ) : !isColorItem ? (
              <span
                className="absolute inset-0 flex items-center justify-center font-bold leading-none"
                style={{
                  color: "white",
                  mixBlendMode: "difference",
                  zIndex: 40,
                  // Position text so only bottom half is visible
                  transform: "translateY(-25%)",
                }}
              >
                {currentItem}
              </span>
            ) : null}
          </div>

          {/* Flipping bottom flap - starts hidden (rotated 90deg), flips into view */}
          <motion.div
            className="absolute inset-0"
            initial={{ rotateX: 90 }}
            animate={bottomFlapControls}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
              zIndex: 10,
              willChange: "transform",
            }}
          >
            {/* Front face - next character bottom half */}
            <div
              className="absolute inset-0 overflow-hidden rounded-b-[0.1em]"
              style={{
                backgroundColor: nextFlapColor,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {render ? (
                render(nextItem, nextIndex)
              ) : !(nextItem?.startsWith?.("#")) ? (
                <span
                  className="absolute inset-0 flex items-center justify-center font-bold leading-none"
                  style={{
                    color: "white",
                    mixBlendMode: "difference",
                    zIndex: 40,
                    transform: "translateY(-25%)",
                  }}
                >
                  {nextItem}
                </span>
              ) : null}
            </div>

            {/* Back face - current character bottom half (hidden initially) */}
            <div
              className="absolute inset-0 overflow-hidden rounded-t-[0.1em]"
              style={{
                backgroundColor: currentFlapColor,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            >
              {render ? (
                render(currentItem, currentIndex)
              ) : !isColorItem ? (
                <span
                  className="absolute inset-0 flex items-center justify-center font-bold leading-none"
                  style={{
                    color: "white",
                    mixBlendMode: "difference",
                    zIndex: 40,
                    transform: "translateY(-25%)",
                  }}
                >
                  {currentItem}
                </span>
              ) : null}
            </div>
          </motion.div>

          {/* Shadow layers for depth effect */}
          <div
            className="absolute left-0 right-0 rounded-b-[0.1em] pointer-events-none"
            style={{
              top: "0.05em",
              height: halfHeight,
              backgroundColor: currentFlapColor,
              opacity: 0.6,
              zIndex: 2,
            }}
          />
          <div
            className="absolute left-0 right-0 rounded-b-[0.1em] pointer-events-none"
            style={{
              top: "0.08em",
              height: halfHeight,
              backgroundColor: currentFlapColor,
              opacity: 0.4,
              zIndex: 1,
            }}
          />
        </div>
      </div>
    )
  }
)
SplitFlapCell.displayName = "SplitFlapCell"

// ============================================================================
// SplitFlapText - Convenience wrapper for text strings
// ============================================================================

export interface SplitFlapTextProps {
  text: string
  items?: readonly string[]
  className?: string
  style?: React.CSSProperties
  flipSpeed?: number
  staggerDelay?: number
  onFlipComplete?: () => void
}

const SplitFlapText = React.forwardRef<HTMLDivElement, SplitFlapTextProps>(
  (
    {
      text,
      items = ALPHANUMERIC,
      className,
      style,
      flipSpeed = 80,
      staggerDelay = 0,
      onFlipComplete,
    },
    ref
  ) => {
    const chars = text.toUpperCase().split("")
    const completedCountRef = React.useRef(0)
    const prevTextRef = React.useRef(text)

    // Convert characters to indices
    const indices = React.useMemo(
      () =>
        chars.map((char) => {
          const idx = items.indexOf(char)
          return idx === -1 ? 0 : idx
        }),
      [chars, items]
    )

    // Reset completion count when text changes
    React.useEffect(() => {
      if (prevTextRef.current !== text) {
        completedCountRef.current = 0
        prevTextRef.current = text
      }
    }, [text])

    const handleCellComplete = React.useCallback(() => {
      completedCountRef.current += 1
      if (completedCountRef.current >= chars.length) {
        onFlipComplete?.()
      }
    }, [chars.length, onFlipComplete])

    return (
      <div
        ref={ref}
        className={cn("inline-flex", className)}
        style={{
          gap: "0.1em",
          ...style,
        }}
      >
        {indices.map((idx, i) => (
          <SplitFlapCell
            key={i}
            index={idx}
            items={items}
            flipSpeed={flipSpeed}
            onFlipComplete={handleCellComplete}
            style={{
              animationDelay: `${i * staggerDelay}ms`,
            }}
          />
        ))}
      </div>
    )
  }
)
SplitFlapText.displayName = "SplitFlapText"

// ============================================================================
// Exports
// ============================================================================

export { SplitFlapCell, SplitFlapText }
