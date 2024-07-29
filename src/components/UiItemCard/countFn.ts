export const decrement = (
  setCount: (arg0: number) => void,
  count: number,
  handleUpdate: { (): Promise<void>; (): void }
) => {
  if (count === 1) {
    handleUpdate()
  } else {
    setCount(count - 1)
  }
  return count
}
