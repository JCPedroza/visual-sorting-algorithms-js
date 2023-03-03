export const selectionSort = (nums) => {
  return nums
}

export function * selectionSortGen (nums) {
  yield nums
}

export default {
  id: 'Selection Sort',
  sort: selectionSort,
  gen: selectionSortGen
}
