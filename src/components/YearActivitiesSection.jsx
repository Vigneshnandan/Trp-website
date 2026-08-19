import { yearWiseActivities } from '../data/aiDsActivityMapping'
import SubjectButton from './SubjectButton'

export default function YearActivitiesSection() {
  return (
    <div className="space-y-12">
      {yearWiseActivities.map((year) => (
        <div key={year.yearLabel}>
          <h3 className="font-display text-xl font-extrabold leading-snug text-ink sm:text-2xl">
            {year.yearLabel}
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {year.subjects.map((subject) => (
              <SubjectButton
                key={subject.name}
                name={subject.name}
                type={subject.type}
                mandatory={subject.mandatory}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}