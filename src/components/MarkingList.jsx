export default function MarkingList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.round}
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl border-2 border-accent bg-white px-5 py-4"
        >
          <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">
            {item.round}
          </span>
          <span className="font-display text-base font-black uppercase text-ink">
            {item.marks}
          </span>
        </li>
      ))}
    </ul>
  )
}