import { useId, useState } from 'react'

export default function SubjectButton({ name, type, mandatory }) {
  const [open, setOpen] = useState(false)
  const contentId = useId()

  return (
    <div className="rounded-2xl border-2 border-accent bg-white shadow-sm transition duration-200 ease-out hover:border-ink hover:shadow-md">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-3 text-left"
      >
        <span className="flex min-w-0 flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-ink sm:text-base">{name}</span>
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
            {type}
          </span>
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        id={contentId}
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <div className="px-5 pb-4">
            {mandatory.length > 0 ? (
              <ul className="space-y-1.5 border-t border-ink/10 pt-3 text-sm leading-relaxed text-ink/80 sm:text-base">
                {mandatory.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-xl border-2 border-dashed border-accent/50 bg-white/60 px-4 py-3 text-center">
                <span className="eyebrow text-ink/40">Content to be added</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}