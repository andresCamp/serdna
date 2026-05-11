import HeroPortrait from "@/components/HeroPortrait"

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-16 text-[#201511] sm:px-10 lg:px-16 lg:pr-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[12%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#efb58d]/30 blur-[110px]" />
        <div className="absolute bottom-[18%] left-[12%] h-64 w-64 rounded-full bg-[#7b4c35]/12 blur-[120px]" />
        <div className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-[#fff4ea]/70 blur-[90px]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center gap-8 text-center">
        <div className="space-y-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-[#8d6650] sm:text-xs">
            Frontend Engineer • Next.js • Motion Systems
          </p>

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 w-[130vw] -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(4.5rem,17vw,12rem)] font-semibold uppercase tracking-[0.12em] text-white/70 [text-shadow:0_18px_36px_rgba(255,255,255,0.24)]"
            >
              Andrés Campos
            </div>
            <HeroPortrait />
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-5">
          <h1 className="font-serif text-4xl font-semibold leading-none tracking-tight text-[#1d1411] sm:text-5xl lg:text-6xl">
            Interfaces with warmth, weight, and a little smoke on the glass.
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#62483b] sm:text-base">
            I build tactile web experiences in Next.js, Tailwind CSS, and TypeScript,
            using motion and lighting that feel grounded instead of decorative.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#6f5244]">
          <span className="rounded-full border border-white/60 bg-white/45 px-4 py-2 backdrop-blur-sm">
            Creative Frontend
          </span>
          <span className="rounded-full border border-white/60 bg-white/45 px-4 py-2 backdrop-blur-sm">
            Interaction Design
          </span>
          <span className="rounded-full border border-white/60 bg-white/45 px-4 py-2 backdrop-blur-sm">
            TypeScript Craft
          </span>
        </div>
      </section>
    </main>
  )
}
