import ImageBlock from './ImageBlock'

export default function CoreCurriculumSection() {
  return (
    <div className="space-y-12">
      <ImageBlock
        slot="department-cse-curriculum-content"
        alt="Core curriculum structure image"
        aspect="16/9"
      />
      <div>
        <h3 className="font-display text-xl font-extrabold leading-snug text-ink sm:text-2xl">
          Core Curriculum Structure- R 2026 (2026-2030)
        </h3>
        <ImageBlock
          slot="department-cse-curriculum-content-r2026"
          alt="Core curriculum structure image - R 2026"
          aspect="16/9"
          className="mt-5"
        />
      </div>
    </div>
  )
}