"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

// Default charset for split-flap displays
const DEFAULT_CHARSET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

// ============================================================================
// SplitFlapCell - Atomic single character flap
// ============================================================================

export interface SplitFlapCellProps {
  char: string
  className?: string
  style?: React.CSSProperties
  flipSpeed?: number
  charset?: string
  onFlipComplete?: () => void
}

const SplitFlapCell = React.forwardRef<HTMLDivElement, SplitFlapCellProps>(
  (
    {
      char,
      className,
      style,
      flipSpeed = 30,
      charset = DEFAULT_CHARSET,
      onFlipComplete,
    },
    ref
  ) => {
    const [currentChar, setCurrentChar] = React.useState(char.toUpperCase())
    const [stage, setStage] = React.useState(0)
    const [isFlipping, setIsFlipping] = React.useState(false)
    const targetCharRef = React.useRef(char.toUpperCase())

    // Get next character in charset
    const getNextChar = React.useCallback(
      (c: string) => {
        const upperCharset = charset.toUpperCase()
        const idx = upperCharset.indexOf(c.toUpperCase())
        if (idx === -1) return upperCharset[0]
        return upperCharset[(idx + 1) % upperCharset.length]
      },
      [charset]
    )

    // Detect char prop changes and start cycling
    React.useEffect(() => {
      const targetChar = char.toUpperCase()
      targetCharRef.current = targetChar

      if (currentChar !== targetChar) {
        setIsFlipping(true)
      }
    }, [char, currentChar])

    // Animation loop - cycle through stages and characters
    React.useEffect(() => {
      if (!isFlipping) return

      const targetChar = targetCharRef.current

      const timer = setTimeout(() => {
        setStage((prevStage) => {
          const nextStage = (prevStage + 1) % 3

          // At stage 2, advance to next character
          if (prevStage === 2) {
            setCurrentChar((prevChar) => {
              const nextChar = getNextChar(prevChar)

              // Check if we've reached the target
              if (nextChar === targetChar) {
                setIsFlipping(false)
                onFlipComplete?.()
              }

              return nextChar
            })
          }

          return nextStage
        })
      }, flipSpeed)

      return () => clearTimeout(timer)
    }, [isFlipping, stage, flipSpeed, getNextChar, onFlipComplete])

    const nextChar = getNextChar(currentChar)

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex flex-col", className)}
        style={{
          width: "0.75em",
          height: "1.1em",
          gap: "0.025em",
          ...style,
        }}
      >
        {/* Top half - static */}
        <div
          className="relative overflow-hidden rounded-t-[0.1em]"
          style={{
            height: "0.55em",
            backgroundColor: "currentColor",
            opacity: 0.9,
          }}
        >
          {stage === 2 && (
            <motion.div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "0.275em",
                backgroundColor: "currentColor",
                opacity: 0.7,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: flipSpeed / 1000 }}
            />
          )}
        </div>

        {/* Bottom half - with stacked flaps */}
        <div className="relative" style={{ height: "0.55em" }}>
          {/* Deepest layer (shadow) */}
          <div
            className="absolute left-0 right-0 rounded-b-[0.1em]"
            style={{
              top: "0.1em",
              height: "0.55em",
              backgroundColor: "currentColor",
              opacity: 0.5,
            }}
          />

          {/* Middle layer */}
          <div
            className="absolute left-0 right-0 rounded-b-[0.1em]"
            style={{
              top: "0.05em",
              height: "0.55em",
              backgroundColor: "currentColor",
              opacity: stage === 1 ? 0.9 : 0.7,
            }}
          />

          {/* Top layer (active flap) */}
          <motion.div
            className="absolute left-0 right-0 rounded-b-[0.1em]"
            style={{
              height: stage === 1 ? "0.275em" : "0.55em",
              backgroundColor: "currentColor",
              opacity: stage === 1 ? 0.7 : 0.9,
              zIndex: stage === 1 ? 50 : 30,
            }}
            initial={false}
            animate={{
              height: stage === 1 ? "0.275em" : "0.55em",
            }}
            transition={{ duration: flipSpeed / 1000 }}
          />
        </div>

        {/* Character display */}
        <span
          className="absolute inset-0 flex items-center justify-center font-bold leading-none"
          style={{
            color: "white",
            mixBlendMode: "difference",
            transform: "translateY(-0.05em)",
            zIndex: 40,
          }}
        >
          {stage === 2 ? nextChar : currentChar}
        </span>
      </div>
    )
  }
)
SplitFlapCell.displayName = "SplitFlapCell"

// ============================================================================
// SplitFlapDisplay - Convenience wrapper for strings
// ============================================================================

export interface SplitFlapDisplayProps {
  text: string
  className?: string
  style?: React.CSSProperties
  flipSpeed?: number
  staggerDelay?: number
  charset?: string
  onFlipComplete?: () => void
}

const SplitFlapDisplay = React.forwardRef<HTMLDivElement, SplitFlapDisplayProps>(
  (
    {
      text,
      className,
      style,
      flipSpeed = 30,
      staggerDelay = 0,
      charset = DEFAULT_CHARSET,
      onFlipComplete,
    },
    ref
  ) => {
    const chars = text.split("")
    const completedCountRef = React.useRef(0)
    const prevTextRef = React.useRef(text)

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
        {chars.map((char, index) => (
          <SplitFlapCell
            key={index}
            char={char}
            flipSpeed={flipSpeed}
            charset={charset}
            onFlipComplete={handleCellComplete}
            style={{
              animationDelay: `${index * staggerDelay}ms`,
            }}
          />
        ))}
      </div>
    )
  }
)
SplitFlapDisplay.displayName = "SplitFlapDisplay"

export { SplitFlapCell, SplitFlapDisplay, DEFAULT_CHARSET }
