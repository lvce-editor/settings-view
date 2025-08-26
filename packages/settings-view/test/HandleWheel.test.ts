import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleWheel } from '../src/parts/HandleWheel/HandleWheel.ts'

test('handleWheel accumulates deltaY', () => {
  const state = createDefaultState()
  const state1 = handleWheel(state, 10)
  expect(state1.deltaY).toBe(10)

  const state2 = handleWheel(state1, 5)
  expect(state2.deltaY).toBe(15)
})

test('handleWheel supports negative deltaY', () => {
  const state = createDefaultState()
  const state1 = handleWheel(state, -20)
  expect(state1.deltaY).toBe(0)

  const state2 = handleWheel(state1, 30)
  expect(state2.deltaY).toBe(10)
})

test('handleWheel clamps to max based on filteredItems.length * ITEM_HEIGHT', () => {
  const state = {
    ...createDefaultState(),
    filteredItems: [{ id: 'a', heading: '', description: '', type: 0, value: '', category: '', modified: false, errorMessage: '', hasError: false }],
  }
  const oneItemHeight = 100
  const state1 = handleWheel(state, 150)
  expect(state1.deltaY).toBe(oneItemHeight) // clamped to 100
})
