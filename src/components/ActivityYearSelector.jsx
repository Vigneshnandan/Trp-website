import { useState } from 'react'
import ImageBlock from './ImageBlock'

export default function ActivityYearSelector({ missionTitle }) {
  const [selectedYear, setSelectedYear] = useState(0)

  const yearLabels = ['2025', '2026']
  const years = ['freshman', 'sophomore', 'junior', 'senior']
  const yearName = missionTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        {yearLabels.map((year, index) => (
          <button
            key={index}
            onClick={() => setSelectedYear(index)}
            className={`rounded-xl border-2 px-8 py-4 font-display text-base font-bold uppercase tracking-wide transition-colors duration-200 ${
              selectedYear === index
                ? 'border-ink bg-accent text-white'
                : 'border-ink/15 bg-white text-ink/70 hover:border-ink hover:text-ink'
            }`}
          >
            R {year}
          </button>
        ))}
      </div>

      <ImageBlock
        slot={`department-cse-mission-${yearName}-r${yearLabels[selectedYear]}`}
        alt={`${missionTitle} R ${yearLabels[selectedYear]} activity image`}
        aspect="16/9"
        fit="contain"
      />
    </div>
  )
}
