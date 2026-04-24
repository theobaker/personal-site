import styles from './Footer.module.css'

export default function Footer() {
  const links = [
    { href: 'https://x.com/tab_delete', label: 'Twitter' },
    { href: 'https://www.instagram.com/tabsterbaker/', label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/theo-baker/', label: 'LinkedIn' },
    { href: '#', label: 'Email' },
  ]

  return (
    <footer className={styles.footer}>
      <div className="page">
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            theo baker<span>.</span>
          </div>
          <ul className={styles.footerLinks}>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerCopy}>
          &copy; 2026 Theo Baker.
        </div>
      </div>
    </footer>
  )
}
