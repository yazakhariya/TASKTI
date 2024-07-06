import styles from './CatalogPage.module.css'
import FaqSection from './components/FAQ/FaqSection'
import GreetingPart from './components/GreetingPart/GreetingPart'
import Products from './components/Products/Products'

export default function CatalogPage() {
  return (
    <main className={styles.main}>
      <GreetingPart />
      <Products />
      <FaqSection />
    </main>
  )
}
