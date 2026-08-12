import { useEffect, useState } from 'react'

const ASPECT_CLASSES = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-4/3',
  '3/2': 'aspect-3/2',
  '16/9': 'aspect-video',
  '21/9': 'aspect-21/9',
}

const ROUNDED = 'rounded-2xl'

function Placeholder({ alt, slot, aspectClass, aspectStyle, className }) {
  return (
    <div
      className={`flex w-full select-none flex-col items-center justify-center gap-3 border-2 border-dashed border-accent/50 bg-white/60 p-6 text-center ${ROUNDED} ${aspectClass} ${className}`}
      style={aspectStyle}
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
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2" />
        <path d="m21 15-5-5L5 21" strokeWidth="2" />
      </svg>
      <p className="max-w-sm text-sm font-medium text-ink/80">{alt}</p>
      <p className="max-w-sm text-xs text-ink/50">
        Place image at: public/images/{slot}.jpg
      </p>
    </div>
  )
}

export default function ImageBlock({
  slot,
  alt,
  aspect = '16/9',
  className = '',
  eager = false,
}) {
  const [failed, setFailed] = useState(false)
  const src = `/images/${slot}.jpg`
  const aspectClass = ASPECT_CLASSES[aspect] ?? ''
  const aspectStyle = { aspectRatio: aspect }

  useEffect(() => {
    setFailed(false)
  }, [slot])

  if (failed) {
    return (
      <Placeholder
        alt={alt}
        slot={slot}
        aspectClass={aspectClass}
        aspectStyle={aspectStyle}
        className={className}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      className={`w-full object-cover ${ROUNDED} ${aspectClass} ${className}`}
      style={aspectStyle}
    />
  )
}