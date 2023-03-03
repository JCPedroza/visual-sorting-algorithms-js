import test from './assert.js'
import sorters from '../sorters/sorters.repo.js'

const lastGen = (gen) => [...gen].at(-1)

for (const { id, sort, gen } of sorters) {
  test(`Èmpty ${id}`)
    .expect(sort([]))
    .toEqual([])

  test(`Singleton ${id}`)
    .expect(sort([5]))
    .toEqual([5])

  test(`Ordered ${id}`)
    .expect(sort([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4])

  test(`Reversed ${id}`)
    .expect(sort([4, 3, 2, 1]))
    .toEqual([1, 2, 3, 4])

  test(`Floats ${id}`)
    .expect(sort([5.3, -1.9, 2.8, 9.7, -8.3]))
    .toEqual([-8.3, -1.9, 2.8, 5.3, 9.7])

  test(`Èmpty gen ${id}`)
    .expect(lastGen(gen([])))
    .toEqual([])

  test(`Singleton gen ${id}`)
    .expect(lastGen(gen([5])))
    .toEqual([5])

  test(`Ordered gen ${id}`)
    .expect(lastGen(gen([1, 2, 3, 4])))
    .toEqual([1, 2, 3, 4])

  test(`Reversed gen ${id}`)
    .expect(lastGen(gen([4, 3, 2, 1])))
    .toEqual([1, 2, 3, 4])

  test(`Floats gen ${id}`)
    .expect(lastGen(gen([5.3, -1.9, 2.8, 9.7, -8.3])))
    .toEqual([-8.3, -1.9, 2.8, 5.3, 9.7])
}
