"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import type { PointerEvent } from "react"
import { useRef } from "react"

const SPRING = {
  stiffness: 180,
  damping: 20,
  mass: 0.7,
}

export default function HeroPortrait() {
  const frameRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), SPRING)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]), SPRING)
  const frameX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), SPRING)
  const frameY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), SPRING)

  const emberX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), SPRING)
  const emberY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-10, 10]), SPRING)

  const shadowX = useSpring(useTransform(pointerX, [-0.5, 0.5], [20, -20]), SPRING)
  const shadowY = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, 22]), SPRING)
  const shadowScaleX = useSpring(useTransform(pointerX, [-0.5, 0.5], [1.06, 0.94]), SPRING)
  const shadowScaleY = useSpring(useTransform(pointerY, [-0.5, 0.5], [0.92, 1.08]), SPRING)
  const shadowOpacity = useSpring(useTransform(pointerY, [-0.5, 0.5], [0.26, 0.5]), SPRING)

  const faceX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), SPRING)
  const faceY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-6, 8]), SPRING)
  const hairX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-16, 16]), SPRING)
  const hairY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-10, 10]), SPRING)
  const torsoX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), SPRING)
  const torsoY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-4, 8]), SPRING)
  const highlightX = useTransform(pointerX, [-0.5, 0.5], [24, 76])
  const highlightY = useTransform(pointerY, [-0.5, 0.5], [18, 70])
  const glowLeftX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-20, 20]), SPRING)
  const glowLeftY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-12, 12]), SPRING)
  const glowRightX = useSpring(useTransform(pointerX, [-0.5, 0.5], [14, -14]), SPRING)
  const glowRightY = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), SPRING)
  const featureX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-4, 4]), SPRING)
  const featureY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-3, 4]), SPRING)

  const sheen = useMotionTemplate`radial-gradient(circle at ${highlightX}% ${highlightY}%, rgba(255, 247, 237, 0.92), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 40%, rgba(0, 0, 0, 0.22) 100%)`

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) {
      return
    }

    const bounds = frameRef.current?.getBoundingClientRect()

    if (!bounds) {
      return
    }

    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div className="relative mx-auto flex w-full max-w-[19rem] items-end justify-center [perspective:1600px] sm:max-w-[22rem]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 h-12 w-[72%] rounded-full bg-[#190d0b] blur-[32px]"
        style={
          prefersReducedMotion
            ? { opacity: 0.34 }
            : {
                x: shadowX,
                y: shadowY,
                opacity: shadowOpacity,
                scaleX: shadowScaleX,
                scaleY: shadowScaleY,
              }
        }
      >
        <div className="hero-shadow-drift h-full w-full rounded-full" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-1.5rem] opacity-80 mix-blend-screen"
        style={prefersReducedMotion ? undefined : { x: emberX, y: emberY }}
      >
        <div className="hero-smolder h-full w-full rounded-[2.6rem] bg-[radial-gradient(circle_at_18%_28%,rgba(255,197,128,0.52),transparent_26%),radial-gradient(circle_at_82%_30%,rgba(255,112,67,0.38),transparent_24%),radial-gradient(circle_at_48%_86%,rgba(255,145,92,0.26),transparent_22%)] blur-[26px]" />
      </motion.div>

      <motion.div
        ref={frameRef}
        className="relative z-10 w-full touch-none"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        onPointerCancel={resetPointer}
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: frameX,
                y: frameY,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
      >
        <div className="hero-portrait-float relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/40 bg-[#160d0c] shadow-[0_28px_80px_rgba(18,8,7,0.26),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-[linear-gradient(165deg,#261614_0%,#120a0a_44%,#1a1110_100%)]" />

          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{ background: sheen }}
          />

          <div className="absolute inset-x-5 bottom-5 top-5 rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,204,173,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_28%,rgba(0,0,0,0.16)_100%)]" />

          <motion.div
            aria-hidden="true"
            className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#d68b57]/28 blur-3xl"
            style={prefersReducedMotion ? undefined : { x: glowLeftX, y: glowLeftY }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -right-8 bottom-16 h-44 w-44 rounded-full bg-[#5a3224]/24 blur-3xl"
            style={prefersReducedMotion ? undefined : { x: glowRightX, y: glowRightY }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute inset-x-[10%] bottom-[9%] h-[41%]"
            style={prefersReducedMotion ? undefined : { x: torsoX, y: torsoY }}
          >
            <div className="h-full w-full rounded-[46%_46%_18%_18%/50%_50%_18%_18%] bg-[linear-gradient(180deg,#42271d_0%,#24120e_72%)] shadow-[inset_0_14px_18px_rgba(255,228,207,0.06)]" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-[23%] h-[35%] w-[38%] -translate-x-1/2"
            style={prefersReducedMotion ? undefined : { x: faceX, y: faceY }}
          >
            <div className="h-full w-full rounded-[44%_44%_50%_50%/38%_38%_60%_60%] bg-[linear-gradient(180deg,#f2d8c1_0%,#d39b77_38%,#9a6144_100%)] shadow-[inset_0_16px_20px_rgba(255,255,255,0.16),inset_0_-18px_24px_rgba(92,42,23,0.44)]" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-[14%] h-[25%] w-[44%] -translate-x-1/2"
            style={prefersReducedMotion ? undefined : { x: hairX, y: hairY }}
          >
            <div className="h-full w-full rounded-[52%_52%_36%_36%/60%_60%_38%_38%] bg-[linear-gradient(180deg,#241511_0%,#573123_54%,rgba(60,34,24,0.22)_100%)] shadow-[0_16px_20px_rgba(12,5,4,0.22)]" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute left-[39%] top-[38%] h-[1.8%] w-[7%] rounded-full bg-[#45241b]/80 blur-[0.4px]"
            style={prefersReducedMotion ? undefined : { x: featureX, y: featureY }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-[54%] top-[38%] h-[1.8%] w-[7%] rounded-full bg-[#45241b]/80 blur-[0.4px]"
            style={prefersReducedMotion ? undefined : { x: featureX, y: featureY }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-[41.5%] h-[8%] w-[4.8%] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(255,238,225,0.45),rgba(127,66,38,0.55))] blur-[0.8px]"
            style={prefersReducedMotion ? undefined : { x: featureX, y: featureY }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-[49%] h-[1.8%] w-[11%] -translate-x-1/2 rounded-full bg-[#6a3324]/80 blur-[0.5px]"
            style={prefersReducedMotion ? undefined : { x: featureX, y: featureY }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-[31%] h-[8%] w-[8%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_32%_32%,rgba(255,250,246,0.8),rgba(255,220,186,0.24)_60%,transparent_72%)] blur-[1px]"
            style={prefersReducedMotion ? undefined : { x: featureX, y: featureY }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_26px_rgba(255,132,76,0.12),inset_0_0_68px_rgba(255,183,126,0.04)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem] border border-white/10"
          />
        </div>
      </motion.div>
    </div>
  )
}
