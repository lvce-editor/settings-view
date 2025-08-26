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

test('handleWheel clamps to max based on content height minus viewport', () => {
  const state = {
    ...createDefaultState(),
    height: 600,
    itemHeight: 100,
    filteredItems: [
      { id: 'a', heading: '', description: '', type: 0, value: '', category: '', modified: false, errorMessage: '', hasError: false },
      { id: 'b', heading: '', description: '', type: 0, value: '', category: '', modified: false, errorMessage: '', hasError: false },
      { id: 'c', heading: '', description: '', type: 0, value: '', category: '', modified: false, errorMessage: '', hasError: false },
    ],
  }
  // totalContentHeight = 3 * 100 = 300, viewport height = 600 => max scroll = 0
  const state1 = handleWheel(state, 150)
  expect(state1.deltaY).toBe(0)

  const state2 = {
    ...state,
    filteredItems: Array.from({ length: 10 }, (_, i) => ({ id: String(i), heading: '', description: '', type: 0, value: '', category: '', modified: false, errorMessage: '', hasError: false })),
  }
  // totalContentHeight = 10 * 100 = 1000, viewport = 600 => max = 400
  const state3 = handleWheel(state2, 500)
  expect(state3.deltaY).toBe(400)
})
