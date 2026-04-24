import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className="page">
      <section className={styles.personalHero}>
        <div className={styles.personalHeroGrid}>
          <div className={styles.personalHeroText}>
            <h1>
              <span className={styles.greeting}>hi, i&apos;m</span>
              <span className="redact redact-1">Theo Baker<span className="redact-dot">.</span></span>
            </h1>
            <p className={`${styles.intro} fade-up fade-up-8`}>
              Journalist and author. George Polk Award winner. Stanford senior studying history and computer science. My debut book will be published by{' '}
              <a href="https://www.penguin.com/penguin-press-overview/">Penguin Press</a> in May.
            </p>
            <div className={`${styles.personalHeroLinks} fade-up fade-up-9`}>
              <a href="https://www.penguinrandomhouse.com/books/760317/how-to-rule-the-world-by-theo-baker/" className="btn btn-primary">The Book</a>
              <a href="https://www.linkedin.com/in/theo-baker/" className="btn-text">About Me &#x2192;</a>
            </div>
          </div>
          <div className={`${styles.heroPhotoWrapper} fade-up fade-up-10`}>
            <Image
              src="/hero-photo.jpg"
              alt="Theo Baker"
              width={330}
              height={440}
              className={styles.heroPhoto}
              priority
            />
            <div className={styles.heroPhotoCaption}>Photo: Elena Seibert</div>
          </div>
        </div>
      </section>
    </div>
  )
}
