export default function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
    </main>
  )
}

export const dynamic = 'force-static'

export const metadata = {
  title: 'Page not found | Absalem Aroon',
}
