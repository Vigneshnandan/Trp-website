import { coreCurriculumStructure } from '../data/aiDsActivityMapping'
import PlaceholderBlock from './PlaceholderBlock'

export default function CoreCurriculumSection() {
  return (
    <div className="space-y-5">
      {coreCurriculumStructure.map((entry) => (
        <div
          key={entry.title}
          className="rounded-2xl border-2 border-accent bg-white p-6 shadow-sm sm:p-8"
        >
          <h3 className="font-display text-lg font-extrabold leading-snug text-ink sm:text-xl">
            {entry.title}
          </h3>
          <div className="mt-4">
            {entry.description === null ? (
              <PlaceholderBlock />
            ) : (
              <p className="max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
                {entry.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}