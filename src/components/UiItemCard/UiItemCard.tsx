import addButton from '../../../public/addtocart.svg'
import styles from './UiItemCard.module.css'

type Props = {
  img: string
  name: string
  price: string
}

export default function UiItemCard({ img, name, price }: Props) {
  return <div>
    <img className='itemImg' alt={`Изображение товара ${name}`} src={img} />
    <div>
        <div>
            <span className='itemName'>{name}</span>
            <span className='itemPrice'>{price}</span>
        </div>
        <button className={styles.button}><img alt="Иконка кнопки" src={addButton} /></button>
    </div>
  </div>
}
