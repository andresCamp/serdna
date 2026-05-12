import { useEffect, useState } from 'react'

type Props = {
  repo: string
  xHandle?: string
  className?: string
}

export function GitHubStars({ repo, xHandle, className }: Props) {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.stargazers_count != null) setStars(data.stargazers_count)
      })
      .catch(() => {})
  }, [repo])

  return (
    <div className={`inline-flex items-center gap-3 ${className ?? ''}`}>
      <a
        href={`https://github.com/${repo}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Star ${repo} on GitHub`}
        className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-all duration-300"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        {stars !== null && (
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 fill-yellow-500/85 text-yellow-500/85" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            <span className="tabular-nums">{stars}</span>
          </span>
        )}
      </a>

      {xHandle && (
        <a
          href={`https://x.com/${xHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow @${xHandle} on X`}
          className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-all duration-300"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </a>
      )}
    </div>
  )
}
