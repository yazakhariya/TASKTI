export const decrement = (setCount: (arg0: number) => void, count: number) => {
  if (count === 0) {
    setCount(0)
  } else {
    setCount(count - 1)
  }
  return count
}
