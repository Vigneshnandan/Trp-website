export default function MarkingList({ items }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li
          key={item.round}
          className="text-base leading-relaxed text-ink/80 sm:text-lg"
        >
          <span className="font-semibold text-ink">{item.round}</span>
          <span> — {item.marks}</span>
        </li>
      ))}
    </ul>
  )
}