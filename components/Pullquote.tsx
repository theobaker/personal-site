import styles from './Pullquote.module.css'

export default function Pullquote() {
  return (
    <div className="page">
      <div className={`${styles.pullquote} reveal`}>
        <blockquote>
          &ldquo;If you want to know something, nobody else will figure it out for you. You just have to get off your ass and dig.&rdquo;
        </blockquote>
        <cite>&mdash; Theo Baker</cite>
      </div>
    </div>
  )
}
