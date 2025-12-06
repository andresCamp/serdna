"use client"

import { useState } from "react"
import { SplitFlapDisplay, SplitFlapCell } from "@/components/ui/split-flap"

export default function SplitFlapTestPage() {
  const [text, setText] = useState("SERDNA")
  const [singleChar, setSingleChar] = useState("A")

  return (
    <main className="flex min-h-screen flex-col gap-12 items-center justify-center p-12 bg-zinc-100">
      <h1 className="text-2xl font-bold">Split Flap Display Test</h1>

      {/* Test 1: Hover to flip SERDNA -> ANDRES */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Hover Test (SERDNA ↔ ANDRES)</h2>
        <div
          onMouseEnter={() => setText("ANDRES")}
          onMouseLeave={() => setText("SERDNA")}
          className="cursor-pointer p-4 rounded-lg bg-white shadow-lg"
        >
          <SplitFlapDisplay
            text={text}
            className="text-6xl text-zinc-900"
          />
        </div>
      </section>

      {/* Test 2: Different sizes */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Size Scaling</h2>
        <div className="flex flex-col gap-4 items-center">
          <SplitFlapDisplay text="SMALL" className="text-sm text-zinc-800" />
          <SplitFlapDisplay text="MEDIUM" className="text-2xl text-zinc-800" />
          <SplitFlapDisplay text="LARGE" className="text-4xl text-zinc-800" />
          <SplitFlapDisplay text="HUGE" className="text-7xl text-zinc-800" />
        </div>
      </section>

      {/* Test 3: Single cell with button control */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Single Cell Control</h2>
        <SplitFlapCell char={singleChar} className="text-8xl text-zinc-900" />
        <div className="flex gap-2">
          {["A", "M", "Z", "5", " "].map((c) => (
            <button
              key={c}
              onClick={() => setSingleChar(c)}
              className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700"
            >
              {c === " " ? "Space" : c}
            </button>
          ))}
        </div>
      </section>

      {/* Test 4: Different colors */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Colors (via text-*)</h2>
        <div className="flex gap-4">
          <SplitFlapDisplay text="RED" className="text-4xl text-red-900" />
          <SplitFlapDisplay text="BLUE" className="text-4xl text-blue-900" />
          <SplitFlapDisplay text="GREEN" className="text-4xl text-green-900" />
        </div>
      </section>

      {/* Test 5: Click to randomize */}
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Click to Randomize</h2>
        <RandomDisplay />
      </section>
    </main>
  )
}

function RandomDisplay() {
  const [text, setText] = useState("CLICK ME")

  const randomize = () => {
    const words = ["HELLO", "WORLD", "SPLIT", "FLAP", "REACT", "NEXT"]
    const random = words[Math.floor(Math.random() * words.length)]
    setText(random.padEnd(8, " ").slice(0, 8))
  }

  return (
    <div
      onClick={randomize}
      className="cursor-pointer p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <SplitFlapDisplay text={text} className="text-5xl text-zinc-900" />
    </div>
  )
}
