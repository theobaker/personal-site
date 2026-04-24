import Image from 'next/image'
import styles from './BookSection.module.css'

export default function BookSection() {
  return (
    <div className="page">
      <section className={`${styles.bookSection} reveal`} id="book">
        <div className={styles.bookSectionGrid}>
          <div className={styles.bookCoverWrapper}>
            <Image
              src="/book-cover.jpg"
              alt="How to Rule the World by Theo Baker — Book Cover"
              width={333}
              height={500}
              className={styles.bookCover}
              unoptimized
            />
          </div>
          <div>
            <div className={styles.bookLabel}>New Book &mdash; Out May 19, 2026</div>
            <h2 className={styles.bookTitle}>
              How to Rule the <em>World</em>
            </h2>
            <p className={styles.bookSubtitle}>An Education in Power at Stanford University</p>
            <p className={styles.bookDescription}>
              Teenagers in Silicon Valley are a commodity. They are plied with excess and access, and taught to cut corners. 
              This book is a chronicle of the students being groomed to rule the world
              &mdash; and what they&rsquo;re learning from those who already do. It is also the story of the coder-turned-journalist 
              whose freshman year investigation triggered the resignation of Stanford&rsquo;s president.
              
            </p>
            <div className={styles.bookCta}>
              <a href="https://www.penguinrandomhouse.com/books/760317/how-to-rule-the-world-by-theo-baker/" className="btn btn-primary">Pre-Order the Book</a>
              <a href="https://www.theatlantic.com/ideas/2026/04/stanford-students-power/686920/?gift=o_0RIxHKOYK2SLe0kAstR8lvRrqydVuEEKAZSp_r36M&utm_source=copy-link&utm_medium=social&utm_campaign=share" className="btn btn-secondary">Read an Excerpt</a>
            </div>
            <div className={styles.bookMeta}>
              Penguin Press &middot; 336 pages &middot; May 2026
            </div>
            <div className={styles.bookBlurb}>
              <blockquote>
                &ldquo;Poignant, maddening, and genuinely hilarious, How to Rule the World is to be devoured &mdash; and fast, before Stanford buys up and sets fire to every copy. (Talk about a burn book!)&rdquo;
              </blockquote>
              <cite>&mdash; Mark Leibovich, #1 NYT Bestselling Author of <i>This Town</i></cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
