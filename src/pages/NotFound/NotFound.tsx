import loader from 'src/assets/loader.svg'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2>Cтраница не найдена...</h2>
      <img width="100px" src={loader} />
      <p>
        <a href="/">Visit Homepage</a>
      </p>
    </div>
  )
}
