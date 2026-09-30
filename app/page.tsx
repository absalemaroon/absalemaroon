'use client'

import { useEffect, useState } from 'react'

const navItems = ['Research', 'Software', 'Publications', 'Certificates', 'Blog']

export default function HomePage() {
  const [dark, setDark] = useState(false)
  useEffect(() => { setDark(document.documentElement.dataset.theme === 'dark') }, [])
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light' }

  return (
    <main className="site-shell">
      <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">AA</span><span>Absalem Aroon</span></a><button className="theme-button" onClick={toggleTheme} aria-label="Toggle color theme">{dark ? 'Light' : 'Dark'} mode</button></header>
      <nav className="nav" aria-label="Main navigation">{navItems.map((item) => <a href={item === 'Certificates' ? '/certificates' : `#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav>
      <section className="hero" id="top"><div><p className="eyebrow">CYBERSECURITY · BLOCKCHAIN · RESEARCH</p><h1>Building safer<br /><em>digital systems.</em></h1><p className="lede">Cybersecurity student, blockchain and security researcher, and founder of Absalex Labs.</p><div className="actions"><a className="button primary" href="#about">Explore my work <span>↗</span></a><a className="text-link" href="mailto:contact@absalexlabs.com">Get in touch</a></div></div><div className="portrait-wrap"><img src="/img/absalem-aroon.jpg" alt="Portrait of Absalem Aroon" /></div></section>
      <section className="intro" id="about"><p className="section-label">01 / ABOUT</p><div><h2>Curious about how<br />trust is engineered.</h2><p>Absalem Aroon is a Cyber Security student at the Federal University of Technology, Babura, Nigeria, and the Founder of Absalex Labs. His work explores the intersection of secure infrastructure, distributed systems, and emerging blockchain technologies.</p><p>Through research, education, and practical security work, Absalex Labs helps make complex systems more resilient and understandable.</p></div></section>
      <section className="focus" id="research"><p className="section-label">02 / AREAS OF FOCUS</p><div className="focus-grid"><article><span>01</span><h3>Blockchain security</h3><p>Understanding vulnerabilities, protocol design, smart contracts, and the systems that support decentralized trust.</p></article><article><span>02</span><h3>Cyber defense</h3><p>Researching practical ways to identify threats, strengthen infrastructure, and build safer digital experiences.</p></article><article><span>03</span><h3>Distributed systems</h3><p>Exploring secure coordination, cryptography, and reliable systems at scale.</p></article></div></section>
      <section className="cta" id="certificates"><p className="eyebrow">ABS ALEX LABS</p><h2>Research with purpose.<br />Security by design.</h2><a className="button primary" href="/certificates">View certificates <span>↗</span></a></section>
      <footer><span>© 2026 Absalem Aroon</span><span>Absalex Labs · Nigeria</span></footer>
    </main>
  )
}
