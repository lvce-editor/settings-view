import { test, expect } from '@jest/globals'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'

test('loadContent should return state with tabs loaded', async () => {
  const initialState = createDefaultState()
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result).toEqual({
    ...initialState,
    tabs: ['Text Editor', 'Workbench', 'Window', 'Features', 'Applications', 'Security', 'Extensions'],
  })
})

test('loadContent should preserve other state properties', async () => {
  const initialState: SettingsState = {
    breakPointsExpanded: true,
    breakPointsVisible: false,
    focus: 5,
    id: 123,
    uri: 'test://custom-uri',
    x: 100,
    y: 200,
    width: 1200,
    height: 800,
    tabs: ['old-tab'],
  }
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result.breakPointsExpanded).toBe(true)
  expect(result.breakPointsVisible).toBe(false)
  expect(result.focus).toBe(5)
  expect(result.id).toBe(123)
  expect(result.uri).toBe('test://custom-uri')
  expect(result.x).toBe(100)
  expect(result.y).toBe(200)
  expect(result.width).toBe(1200)
  expect(result.height).toBe(800)
  expect(result.tabs).toEqual(['Text Editor', 'Workbench', 'Window', 'Features', 'Applications', 'Security', 'Extensions'])
})
