type Item = {
  itemName: string
  itemPrice: string
  id: number
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
    id: 1,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 2,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 3,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 4,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 5,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 6,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 7,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 8,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 9,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 10,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 11,
  },
  {
    itemName: 'Essence Mascara Lash Princess',
    itemPrice: '110 $',
    id: 12,
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
