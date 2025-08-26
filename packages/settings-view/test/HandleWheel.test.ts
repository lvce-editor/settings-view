import { jest, test, expect } from '@jest/globals'
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
  expect(state1.deltaY).toBe(-20)

  const state2 = handleWheel(state1, 30)
  expect(state2.deltaY).toBe(10)
})
