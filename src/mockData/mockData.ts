type Item = {
  itemName: string
  itemPrice: string
}

type faqType = {
  question: string
  answer: string
  open: boolean
  id: number
}

export const mockData: Item[] = [
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
  },
]

export const faqMockData: faqType[] = [
  {
    question: 'How can I track the status of my order?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    open: false,
    id: 0,
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    open: false,
    id: 1,
  },
  {
    question: 'How can I return or exchange an item?',
    answer:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    open: false,
    id: 2,
  },
]
