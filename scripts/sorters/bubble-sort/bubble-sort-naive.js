export const bubbleSortNaive = (nums) => {
  for (let loop = 0; loop < nums.length; loop++) {
    for (let idx = 0; idx < nums.length - 1; idx++) {
      if (nums[idx] > nums[idx + 1]) {
        [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]]
      }
    }
  }

  return nums
}

export function * bubbleSortNaiveGen (nums) {
  yield nums

  for (let loop = 0; loop < nums.length; loop++) {
    for (let idx = 0; idx < nums.length - 1; idx++) {
      if (nums[idx] > nums[idx + 1]) {
        [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]]
      }

      yield nums
    }
  }

  yield nums
}

export default {
  id: 'Naive Bubble Sort',
  sort: bubbleSortNaive,
  gen: bubbleSortNaiveGen
}
