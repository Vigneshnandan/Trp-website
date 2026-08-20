import { yearWiseActivities } from '../data/aiDsActivityMapping'
import ImageBlock from './ImageBlock'

export default function YearActivitiesSection() {
  return (
    <div className="space-y-12">
      {yearWiseActivities.map((year, index) => (
        <div key={year.yearLabel}>
          <h3 className="font-display text-xl font-extrabold leading-snug text-ink sm:text-2xl">
            {year.yearLabel}
          </h3>
          <ImageBlock
            slot={`department-cse-year-${index + 1}`}
            alt={`${year.yearLabel} activity image`}
            aspect="16/9"
            fit="contain"
            className="mt-5"
          />
        </div>
      ))}
    </div>
  )
}