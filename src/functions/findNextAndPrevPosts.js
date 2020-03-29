const findNextAndPrevPosts = (posts = [], id = "") => {
  const arr = [...posts]
  let index = null
  arr.forEach((item, i) => {
    if (item.id === id) {
      index = i
    }
  })
  const selectedPosts = []
  const prevItem = index === 0 || index === null ? null : arr[index - 1]
  const nextItem =
    index === arr.length - 1 || index === null ? null : arr[index + 1]
  if (index === null) {
    throw new Error(
      "Cant find element in posts array, check if Post id is correct "
    )
    console.log("Był błąd")
  } else {
    selectedPosts.push(prevItem)
    selectedPosts.push(nextItem)
  }
  console.log(selectedPosts)

  return selectedPosts
}
export default findNextAndPrevPosts
