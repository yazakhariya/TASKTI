import * as React from 'react'
import styles from './FaqSection.module.css'
import buttonIcon from '../../../../../public/plus.svg'
import { faqMockData } from 'src/mockData/mockData'

export default function FaqSection() {
  const [faqs, setFaqs] = React.useState(faqMockData)

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqMockData.map((faq, i) => {
        if (i === index) faq.open = !faq.open
        return faq
      })
    )
  }
  return (
    <>
      {faqMockData ? (
        <section className={styles.wrapper}>
          <div className={styles.contentBox}>
            <h3 className={styles.heading}>FAQ</h3>
            {faqs.map((faq) => {
              return (
                <dl className={styles.textBox}>
                  <dt className={styles.question}>
                    <span>{faq.question}</span>
                    <img
                      width={25}
                      height={25}
                      onClick={() => toggleFAQ(faq.id)}
                      className={
                        faq.open
                          ? `${styles.img} ${styles.rotated}`
                          : styles.img
                      }
                      alt="Кнопка открытия/закрытия слайда вопрос/ответ"
                      src={buttonIcon}
                    />
                  </dt>{' '}
                  {faq.open && (
                    <dd className={styles.answerContainer}>
                      <span className={styles.answer}>{faq.answer}</span>
                    </dd>
                  )}
                </dl>
              )
            })}
          </div>
        </section>
      ) : null}
    </>
  )
}
