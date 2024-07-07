import { Helmet } from 'react-helmet-async'
import styles from './CatalogPage.module.css'
import FaqSection from './components/FAQ/FaqSection'
import GreetingPart from './components/GreetingPart/GreetingPart'
import Products from './components/Products/Products'

export default function CatalogPage() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>Catalog | Goods4you</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <GreetingPart />
      <Products />
      <FaqSection />
    </main>
  )
}
