import { Helmet } from 'react-helmet-async'
import styles from './AuthPage.module.css'
import { useState } from 'react'
import { useGetRegisterUserMutation } from 'src/api/services/fetchItems'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [createUser] = useGetRegisterUserMutation()

  const UserDataSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      await createUser({ username, password })
        .unwrap()
        .then((res) => localStorage.setItem('token', res.token))

      navigate('/')
      window.location.reload();
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

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
          <input
            className={styles.input}
            placeholder="Login"
            type="login"
            name="login"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.button}
            type="submit"
            value="Log in"
            onClick={(e) => UserDataSubmit(e)}
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  )
}
