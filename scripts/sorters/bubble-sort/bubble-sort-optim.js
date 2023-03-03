export const bubbleSort = (nums) => {
  for (let loop = 0; loop < nums.length; loop++) {
    let sorted = true

    for (let idx = 0; idx < nums.length - loop - 1; idx++) {
      if (nums[idx] > nums[idx + 1]) {
        [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]]
        sorted = false
      }
    }

    if (sorted) break
  }

  return nums
}

export function * bubbleSortGen (nums) {
  yield nums

  for (let loop = 0; loop < nums.length; loop++) {
    let sorted = true

    for (let idx = 0; idx < nums.length - loop - 1; idx++) {
      if (nums[idx] > nums[idx + 1]) {
        [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]]
        sorted = false
      }

      yield nums
    }

    if (sorted) break
  }

  yield nums
}

export default {
  id: 'Optimized Bubble Sort',
  sort: bubbleSort,
  gen: bubbleSortGen
}
