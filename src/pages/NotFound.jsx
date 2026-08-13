import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-site flex flex-col items-start py-24">
      <h1 className="text-4xl font-black leading-tight text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink/70">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  )
}