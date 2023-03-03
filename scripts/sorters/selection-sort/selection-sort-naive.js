/**
 * Sorts a numeric array in-place using the Selection Sort approach.
 * Time complexity: O(n²).
 * Space complexity: TO(n) AO(1).
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
export const selectionSortNaive = (nums) => {
  for (let loop = 0; loop < nums.length - 1; loop++) {
    let minIdx = loop

    for (let idx = loop + 1; idx < nums.length; idx++) {
      if (nums[idx] < nums[minIdx]) {
        minIdx = idx
      }
    }

    [nums[loop], nums[minIdx]] = [nums[minIdx], nums[loop]]
  }

  return nums
}

/**
 * Generator version of selectionSortNaive.
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
export function * selectionSortNaiveGen (nums) {
  yield nums

  for (let loop = 0; loop < nums.length - 1; loop++) {
    let minIdx = loop

    for (let idx = loop + 1; idx < nums.length; idx++) {
      if (nums[idx] < nums[minIdx]) {
        minIdx = idx
      }
    }

    [nums[loop], nums[minIdx]] = [nums[minIdx], nums[loop]]
    yield nums
  }

  yield nums
}

export default {
  id: 'Naive Selection Sort',
  sort: selectionSortNaive,
  gen: selectionSortNaiveGen
}
