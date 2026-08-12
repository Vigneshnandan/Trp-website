export default function PlaceholderBlock({ children }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-ink/20 bg-white/70 px-6 py-10 text-center">
      {children ?? <span className="eyebrow text-ink/40">Content to be added</span>}
    </div>
  )
}