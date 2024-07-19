import { Helmet } from 'react-helmet-async'
import styles from './AuthPage.module.css'

export default function AuthPage() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>Sign in | Goods4you</title>
        <meta
          name="description"
          content="Login page. Please log in or sign up."
        />
      </Helmet>
      <section className={styles.wrapper}>
        <h1 className={styles.heading}>Sign in</h1>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Login" />
          <input className={styles.input} placeholder="Password" />
          <button className={styles.button} type="button">Sign in</button>
        </form>
      </section>
    </main>
  )
}
