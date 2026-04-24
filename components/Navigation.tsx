'use client'

import { useEffect, useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation({ bordered = false }: { bordered?: boolean }) {   
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        const el = section as HTMLElement
        if (window.scrollY >= el.offsetTop - 120) {
          current = el.getAttribute('id') || ''
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  const navLinks = [
    { href: 'https://www.linkedin.com/in/theo-baker/', label: 'About' },
    { href: 'https://www.penguinrandomhouse.com/books/760317/how-to-rule-the-world-by-theo-baker/', label: 'Book' },
    { href: '/writing', label: 'Writing' },
    // { href: '#speaking', label: 'Speaking' },
  ]

  return (
    <>
        <nav className={`${styles.nav} ${scrolled || bordered ? styles.scrolled : ''}`}>         <div className={styles.navInner}>
          <a href="/" className={`${styles.logo} fade-up fade-up-1`}>
            theo baker<span>.</span>
          </a>
          <ul className={styles.navLinks}>
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`fade-up fade-up-${i + 2} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`${styles.hamburger} fade-up fade-up-2`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobileMenu}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
