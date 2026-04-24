'use client'

import styles from './Ticker.module.css'

const logos = [
  { src: '/logos/PBS_News_Hour_2024.svg', alt: 'PBS News Hour' },
  { src: '/logos/CNBC_logo.svg', alt: 'CNBC' },
  { src: '/logos/Good_Morning_America_2025.svg', alt: 'Good Morning America' },
  { src: '/logos/NewYorkTimes.svg', alt: 'The New York Times', large: true },
  { src: '/logos/The_Wall_Street_Journal_Logo.svg', alt: 'The Wall Street Journal', large: true },
  { src: '/logos/The_Washington_Post_logo.svg', alt: 'The Washington Post', large: true },
  { src: '/logos/CNN_Logo_(2014).svg', alt: 'CNN' },
  { src: '/logos/NBC_2013_(flat_version).svg', alt: 'NBC' },
  { src: '/logos/CBS_logo_(2020).svg', alt: 'CBS' },
  { src: '/logos/MSNBC_2023.svg', alt: 'MSNBC' },
  { src: '/logos/Fox_News_Channel_logo.svg', alt: 'Fox News' },
  { src: '/logos/Bloomberg_logo.svg', alt: 'Bloomberg' },
  { src: '/logos/NPR_new_logo.svg', alt: 'NPR' },
  { src: '/logos/The_Atlantic_Logo_11.2019.svg', alt: 'The Atlantic' },
  { src: '/logos/Axios_logo_(2020).svg', alt: 'Axios' },
  { src: '/logos/Politico-logo_2024_red.svg', alt: 'Politico' },
  { src: '/logos/Los_Angeles_Times_logo.svg', alt: 'Los Angeles Times', large: true },
  { src: '/logos/BuzzFeed_News_Color.svg', alt: 'BuzzFeed News' },
  { src: '/logos/Chicago_Tribune_Logo.svg', alt: 'Chicago Tribune' },
  { src: '/logos/San_Francisco_Chronicle_logo.svg', alt: 'San Francisco Chronicle', large: true },
  { src: '/logos/san_francisco_standard_logo.svg', alt: 'San Francisco Standard', large: true },
  { src: '/logos/Teen_Vogue_logo.svg', alt: 'Teen Vogue' },
  { src: '/logos/Deadline_logo.svg', alt: 'Deadline' },
  { src: '/logos/New_York_Magazine_Logo.svg', alt: 'New York Magazine' },
]

export default function Ticker() {
  return (
    <div className={`${styles.asSeenIn} reveal`}>
      <div className={styles.asSeenInLabel}>As Seen In</div>
      <div className={styles.tickerTrack}>
        {/* First set of logos */}
        {logos.map((logo, i) => (
          <div
            key={`logo-1-${i}`}
            className={`${styles.tickerItem} ${logo.large ? styles.large : ''}`}
          >
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {logos.map((logo, i) => (
          <div
            key={`logo-2-${i}`}
            className={`${styles.tickerItem} ${logo.large ? styles.large : ''}`}
          >
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
