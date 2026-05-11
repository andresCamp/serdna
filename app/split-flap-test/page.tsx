"use client"

import { useState } from "react"
import {
  SplitFlapCell,
  SplitFlapText,
  ALPHA,
  NUMERIC,
  ALPHANUMERIC,
  RAINBOW,
  GRAYSCALE,
} from "@/components/ui/split-flap"

export default function SplitFlapTestPage() {
  const [text, setText] = useState("SERDNA")
  const [count, setCount] = useState(0)
  const [colorIndex, setColorIndex] = useState(0)

  return (
    <main className="flex min-h-screen flex-col gap-12 items-center justify-center p-12 bg-zinc-100">
      <h1 className="text-2xl font-bold">Split Flap Display Test (Index-Based)</h1>

      {/* Test 1: Hover to flip SERDNA -> ANDRES */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Hover Test (SERDNA ↔ ANDRES)</h2>
        <div
          onMouseEnter={() => setText("ANDRES")}
          onMouseLeave={() => setText("SERDNA")}
          className="cursor-pointer p-4 rounded-lg bg-white shadow-lg"
        >
          <SplitFlapText
            text={text}
            items={ALPHA}
            className="text-6xl text-zinc-900"
          />
        </div>
      </section>

      {/* Test 2: Different sizes */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Size Scaling</h2>
        <div className="flex flex-col gap-4 items-center">
          <SplitFlapText text="SMALL" items={ALPHA} className="text-sm text-zinc-800" />
          <SplitFlapText text="MEDIUM" items={ALPHA} className="text-2xl text-zinc-800" />
          <SplitFlapText text="LARGE" items={ALPHA} className="text-4xl text-zinc-800" />
          <SplitFlapText text="HUGE" items={ALPHA} className="text-7xl text-zinc-800" />
        </div>
      </section>

      {/* Test 3: Numeric counter */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Numeric Counter (NUMERIC items)</h2>
        <SplitFlapCell
          index={count}
          items={NUMERIC}
          className="text-8xl text-zinc-900"
        />
        <div className="flex gap-2">
          {[0, 3, 5, 7, 9].map((n) => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700"
            >
              {n}
            </button>
          ))}
        </div>
      </section>

      {/* Test 4: Color flaps */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Color Flaps (RAINBOW palette)</h2>
        <div className="flex gap-2">
          {RAINBOW.map((_, i) => (
            <SplitFlapCell
              key={i}
              index={colorIndex}
              items={RAINBOW}
              className="text-6xl"
            />
          ))}
        </div>
        <div className="flex gap-2">
          {RAINBOW.map((color, i) => (
            <button
              key={i}
              onClick={() => setColorIndex(i)}
              className="w-10 h-10 rounded border-2 border-white shadow"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </section>

      {/* Test 5: Grayscale */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Grayscale Palette</h2>
        <GrayscaleDemo />
      </section>

      {/* Test 6: Mixed - Text with different charsets */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Different Item Sets</h2>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-4">
            <span className="text-sm w-32">ALPHA:</span>
            <SplitFlapText text="HELLO" items={ALPHA} className="text-3xl text-zinc-800" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm w-32">NUMERIC:</span>
            <SplitFlapText text="12345" items={NUMERIC} className="text-3xl text-zinc-800" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm w-32">ALPHANUMERIC:</span>
            <SplitFlapText text="A1B2C3" items={ALPHANUMERIC} className="text-3xl text-zinc-800" />
          </div>
        </div>
      </section>

      {/* Test 7: Custom emoji items */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Custom Items (Emoji)</h2>
        <EmojiDemo />
      </section>

      {/* Test 8: Click to randomize */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Click to Randomize</h2>
        <RandomDisplay />
      </section>
    </main>
  )
}

function GrayscaleDemo() {
  const [index, setIndex] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {GRAYSCALE.map((_, i) => (
          <SplitFlapCell
            key={i}
            index={index}
            items={GRAYSCALE}
            className="text-5xl"
          />
        ))}
      </div>
      <input
        type="range"
        min={0}
        max={GRAYSCALE.length - 1}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        className="w-64"
      />
    </div>
  )
}

function EmojiDemo() {
  const EMOJI = ["😀", "😎", "🔥", "✨", "🚀", "💡"]
  const [index, setIndex] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      <SplitFlapCell
        index={index}
        items={EMOJI}
        className="text-8xl text-zinc-800"
      />
      <div className="flex gap-2">
        {EMOJI.map((emoji, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="text-2xl p-2 bg-white rounded shadow hover:bg-gray-50"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  )
}

function RandomDisplay() {
  const [text, setText] = useState("CLICK ME")

  const randomize = () => {
    const words = ["HELLO", "WORLD", "SPLIT", "FLAP", "REACT", "NEXT JS"]
    const random = words[Math.floor(Math.random() * words.length)]
    setText(random.padEnd(8, " ").slice(0, 8))
  }

  return (
    <div
      onClick={randomize}
      className="cursor-pointer p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <SplitFlapText
        text={text}
        items={ALPHANUMERIC}
        className="text-5xl text-zinc-900"
      />
    </div>
  )
}
