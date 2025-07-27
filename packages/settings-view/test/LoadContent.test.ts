import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent should return state with tabs loaded', async () => {
  const initialState = createDefaultState()
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result).toEqual({
    ...initialState,
    tabs: [
      { id: 'text-editor', label: 'Text Editor', selected: true },
      { id: 'workbench', label: 'Workbench', selected: false },
      { id: 'window', label: 'Window', selected: false },
      { id: 'features', label: 'Features', selected: false },
      { id: 'applications', label: 'Applications', selected: false },
      { id: 'security', label: 'Security', selected: false },
      { id: 'extensions', label: 'Extensions', selected: false },
    ],
    items: expect.any(Array),
    filteredItems: expect.any(Array),
    inputSource: 2,
  })
})

test('loadContent should preserve other state properties', async () => {
  const initialState: SettingsState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    breakPointsVisible: false,
    focus: 5,
    id: 123,
    uri: 'test://custom-uri',
    x: 100,
    y: 200,
    width: 1200,
    height: 800,
    items: [],
    filteredItems: [],
    tabs: [{ id: 'old-tab', label: 'old-tab', selected: true }],
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
  expect(result.tabs).toEqual([
    { id: 'text-editor', label: 'Text Editor', selected: true },
    { id: 'workbench', label: 'Workbench', selected: false },
    { id: 'window', label: 'Window', selected: false },
    { id: 'features', label: 'Features', selected: false },
    { id: 'applications', label: 'Applications', selected: false },
    { id: 'security', label: 'Security', selected: false },
    { id: 'extensions', label: 'Extensions', selected: false },
  ])
})
