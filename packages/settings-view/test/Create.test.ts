import { test, expect } from '@jest/globals'
import { create } from '../src/parts/Create/Create.ts'
import { get } from '../src/parts/SettingsStates/SettingsStates.ts'

test('create function exists and can be called', () => {
  expect(typeof create).toBe('function')
  create(1, 'test://uri', 0, 0, 100, 100)
  const state = get(1)
  expect(state).toBeDefined()
})

test('create initializes the minimum scrollbar thumb height', () => {
  create(2, 'test://uri', 0, 0, 100, 100)
  const { newState } = get(2)
  expect(newState.scrollBarMinHeight).toBe(20)
})
