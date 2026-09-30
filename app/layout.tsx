import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = { title: 'Absalem Aroon — Cybersecurity & Blockchain Researcher', description: 'Portfolio of Absalem Aroon, cybersecurity student, blockchain researcher, and founder of Absalex Labs.' }

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
