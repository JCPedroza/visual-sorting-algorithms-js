export const test = (id) => ({
  expect: (numsA) => ({
    toEqual: (numsB) => {
      if (numsA.length !== numsB.length) {
        throw new Error(`\nLength difference\n${id}\n[${numsA}]\n[${numsB}]`)
      }

      for (let idx = 0; idx < numsA.length; idx++) {
        if (numsA[idx] !== numsB[idx]) {
          throw new Error(`\nInequality at index ${idx}\n${id}\n[${numsA}]\n[${numsB}]`)
        }
      }
    }
  })
})

export default test
