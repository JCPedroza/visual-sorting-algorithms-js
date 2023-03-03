/**
 * Sorts a numeric array in-place using the Selection Sort approach.
 * Doubles the number of comparisons to achieve best O(n) time complexity.
 * Time complexity: BO(n) WO(n^2) AO(n^2).
 * Space complexity: TO(n) AO(1).
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
export const selectionSortOptim = (nums) => {
  for (let loop = 0; loop < nums.length - 1; loop++) {
    let minIdx = loop
    let sorted = true

    for (let idx = loop + 1; idx < nums.length; idx++) {
      if (nums[idx] < nums[minIdx]) {
        minIdx = idx
      }

      if (nums[idx - 1] > nums[idx]) {
        sorted = false
      }
    }

    [nums[loop], nums[minIdx]] = [nums[minIdx], nums[loop]]
    if (sorted) break
  }

  return nums
}

/**
 * Generator version of selectionSOrtOptim.
 * @param {number[]} nums Array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
export function * selectionSortOptimGen (nums) {
  yield nums

  for (let loop = 0; loop < nums.length - 1; loop++) {
    let minIdx = loop
    let sorted = true

    for (let idx = loop + 1; idx < nums.length; idx++) {
      if (nums[idx] < nums[minIdx]) {
        minIdx = idx
      }

      if (nums[idx - 1] > nums[idx]) {
        sorted = false
      }
    }

    [nums[loop], nums[minIdx]] = [nums[minIdx], nums[loop]]
    yield nums
    if (sorted) break
  }

  yield nums
}

export default {
  id: 'Optimized Selection Sort',
  sort: selectionSortOptim,
  gen: selectionSortOptimGen
}
