import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Writing — Theo Baker',
}

const heroStory = {
  href: 'https://www.theatlantic.com/ideas/2026/04/stanford-students-power/686920/?gift=o_0RIxHKOYK2SLe0kAstRySEhvQYa3xQWyGTzI4Fmbg&utm_source=copy-link&utm_medium=social&utm_campaign=share',
  cat: 'Feature · The Atlantic',
  headline: 'The Stanford Inside Stanford',
  dek: (
    <>
      Talent is the most precious resource in Silicon Valley and investors go to great lengths to mine it. An excerpt from my forthcoming book{' '}
      <em>How to Rule the World: An Education in Power at Stanford University</em>.
    </>
  ),
  pub: 'The Atlantic',
  date: 'April 2026',
}

const sidebarStories = [
  {
    href: 'https://stanforddaily.com/2023/07/19/stanford-president-resigns-over-manipulated-research-will-retract-at-least-3-papers/',
    cat: 'News',
    headline: 'Stanford President Resigns Over Manipulated Research',
    dek: 'Marc Tessier-Lavigne steps down after a university review confirms significant flaws in studies from his lab.',
    pub: 'The Stanford Daily',
    date: 'Jul 2023',
  },
  {
    href: 'https://stanforddaily.com/2023/02/17/internal-review-found-falsified-data-in-stanford-presidents-alzheimers-research-colleagues-allege/',
    cat: 'Investigation',
    headline: 'Internal Review Found \u2018Falsified Data\u2019 in President\u2019s Research',
    dek: 'Former colleagues allege that a famous Alzheimer\u2019s study was bogus and should\u2019ve been retracted.',
    pub: 'The Stanford Daily',
    date: 'Feb 2023',
  },
]

const middleStories = [
  {
    href: 'https://www.nytimes.com/2023/07/30/opinion/stanford-president-student-journalist.html',
    cat: 'Essay',
    headline: 'The Research Scandal at Stanford Is More Common Than You Think',
    dek: 'Guardrails to address scientific misconduct have proven inadequate.',
    pub: 'The New York Times',
    date: '2023',
  },
  {
    href: 'https://www.theatlantic.com/ideas/archive/2024/03/stanford-israel-gaza-hamas/677864/',
    cat: 'Feature',
    headline: 'The War at Stanford',
    dek: 'I didn\u2019t know that college would be a factory of unreason.',
    pub: 'The Atlantic',
    date: '2024',
  },
  {
    href: 'https://nymag.com/intelligencer/2023/10/sam-bankman-fried-was-raised-in-a-fraud-cluster.html',
    cat: 'Essay',
    headline: 'Sam Bankman-Fried Was Raised in a Fraud Cluster',
    dek: 'The FTX founder is the kind of fraud that Silicon Valley specializes in producing: the philosopher con artist.',
    pub: 'New York Magazine',
    date: '2024',
  },
]

const bottomStories = [
  {
    href: 'https://stanforddaily.com/2022/10/31/stanford-knew-about-the-campus-imposter-for-a-year-he-kept-coming-back/',
    cat: 'Investigation',
    headline: 'Stanford Knew About the Campus Imposter for a Year. He Kept Coming Back',
    dek: 'Will Curry pretended to be a student, living in a half-dozen dorms and allegedly harassing students. The university kept quiet.',
    pub: 'The Stanford Daily',
    date: '2022',
  },
  {
    href: 'https://airmail.news/issues/2024-8-24/the-cutthroat-world-of-formula-one',
    cat: 'Essay',
    headline: 'The Cutthroat World of Formula One',
    dek: 'As the Italian Grand Prix approaches, Ferrari is desperate to win on its home track\u2014and ruthless in its pursuit of success.',
    pub: 'Air Mail',
    date: '2024',
  },
  {
    href: 'https://stanforddaily.com/2022/10/24/inside-stanfords-war-on-fun-tensions-mount-over-universitys-handling-of-social-life/',
    cat: 'Investigation',
    headline: 'Inside Stanford\u2019s \u2018War on Fun\u2019',
    dek: 'Tensions mount over the university\u2019s handling of social life. My first article for the student paper.',
    pub: 'The Stanford Daily',
    date: '2022',
  },
]

type Story = {
  href: string
  cat: string
  headline: string
  dek: React.ReactNode
  pub: string
  date: string
}

function StoryCard({ story, className }: { story: Story; className?: string }) {
  return (
    <a href={story.href} className={`${styles.story} ${className ?? ''}`}>
      <span className={styles.cat}>{story.cat}</span>
      <h3 className={styles.headline}>{story.headline}</h3>
      <p className={styles.dek}>{story.dek}</p>
      <div className={styles.meta}>
        <span className={styles.pub}>{story.pub}</span> &middot; {story.date}
      </div>
    </a>
  )
}

export default function WritingPage() {
  return (
    <>
      <Navigation bordered />
      <main>
        <div className="page">
          <div className={styles.writingPage}>

            <header className={styles.writingHeader}>
              <div className={styles.writingHeaderLeft}>
                <h1>Writing</h1>
                <p>Selected reporting, essays, and investigations.</p>
              </div>
              <div className={styles.writingHeaderRight}>2022 &ndash; 2026</div>
            </header>

            {/* Top row: hero + sidebar */}
            <div className={styles.topRow}>
              <a href={heroStory.href} className={`${styles.story} ${styles.hero}`}>
                <span className={styles.cat}>{heroStory.cat}</span>
                <h2 className={styles.headline}>{heroStory.headline}</h2>
                <p className={styles.dek}>{heroStory.dek}</p>
                <div className={styles.meta}>
                  <span className={styles.pub}>{heroStory.pub}</span> &middot; {heroStory.date}
                </div>
              </a>

              <div className={styles.sidebar}>
                {sidebarStories.map((story) => (
                  <StoryCard key={story.headline} story={story} />
                ))}
              </div>
            </div>

            {/* Middle row: 3 stories */}
            <div className={styles.bottomRow}>
              {middleStories.map((story) => (
                <StoryCard key={story.headline} story={story} />
              ))}
            </div>

            {/* Bottom row: 3 stories */}
            <div className={styles.bottomRow}>
              {bottomStories.map((story) => (
                <StoryCard key={story.headline} story={story} />
              ))}
            </div>

            {/* <div className={styles.archiveLink}>
              <a href="#">View the complete archive <span className={styles.arrow}>&rarr;</span></a>
            </div> */}

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
