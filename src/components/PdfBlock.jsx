import { useEffect, useState } from 'react'

const ROUNDED = 'rounded-2xl border-2 border-black'

function Placeholder({ label, slot, className }) {
  return (
    <div
      className={`flex w-full select-none flex-col items-center justify-center gap-3 border-2 border-dashed border-accent/50 bg-white/60 p-6 text-center ${ROUNDED} ${className}`}
      style={{ minHeight: '32rem' }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 shrink-0 text-accent"
        aria-hidden="true"
      >
        <path d="M14 3v4a1 1 0 0 0 1 1h4" strokeWidth="2" />
        <path d="M6 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8l5 5v12a1 1 0 0 1-1 1Z" strokeWidth="2" />
        <path d="M9 15h6M9 11h6" strokeWidth="2" />
      </svg>
      <p className="max-w-sm text-sm font-medium text-ink/80">{label}</p>
      <p className="max-w-sm text-xs text-ink/50">
        Place PDF at: public/pdfs/{slot}.pdf
      </p>
    </div>
  )
}

export default function PdfBlock({ slot, label, className = '', height = '32rem' }) {
  const [failed, setFailed] = useState(false)
  const src = `/pdfs/${slot}.pdf`

  useEffect(() => {
    setFailed(false)
  }, [slot])

  if (failed) {
    return <Placeholder label={label} slot={slot} className={className} />
  }

  return (
    <div className={`w-full ${ROUNDED} overflow-hidden ${className}`} style={{ height }}>
      <object
        data={src}
        type="application/pdf"
        className="h-full w-full"
        onError={() => setFailed(true)}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
          <p className="max-w-sm text-sm font-medium text-ink/80">{label}</p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-accent underline underline-offset-2"
          >
            Open PDF
          </a>
        </div>
      </object>
    </div>
  )
}
