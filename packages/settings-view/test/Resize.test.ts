import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getSettingsViewportHeight } from '../src/parts/GetSettingsViewportHeight/GetSettingsViewportHeight.ts'
import { resize } from '../src/parts/Resize/Resize.ts'

const item = (id: string) => ({
  category: 'test',
  description: '',
  errorMessage: '',
  hasError: false,
  heading: id,
  id,
  isModified: false,
  type: 3,
  value: '',
})

test('resize updates bounds and clamps the sidebar to the available width', () => {
  const state = {
    ...createDefaultState(),
    sideBarWidth: 500,
  }

  const result = resize(state, { height: 600, width: 700, x: 50, y: 25 })

  expect(result).not.toBe(state)
  expect(result).toMatchObject({ height: 600, width: 700, x: 50, y: 25, sideBarWidth: 400 })
})

test('resize recomputes visible items and clamps scroll position when the view shrinks', () => {
  const state = {
    ...createDefaultState(),
    filteredItems: Array.from({ length: 20 }, (_, index) => item(String(index))),
    scrollOffset: 5_000,
    sideBarWidth: 250,
  }

  const result = resize(state, { height: 300, width: 600, x: 0, y: 0 })

  expect(result.scrollOffset).toBe(2_000 - getSettingsViewportHeight(300))
  expect(result.minLineY).toBe(Math.floor(result.scrollOffset / state.itemHeight))
  expect(result.visibleItems.length).toBeGreaterThan(0)
  expect(result.scrollBarThumbTop).toBeGreaterThan(0)
})

test('resize preserves settings state unrelated to bounds', () => {
  const state = {
    ...createDefaultState(),
    focus: 5,
    modifiedSettings: { 'editor.fontSize': true },
    searchValue: 'test',
    tabs: [{ id: 'text-editor', label: 'Text Editor', selected: true }],
  }

  const result = resize(state, { height: 700, width: 900, x: 10, y: 20 })

  expect(result.focus).toBe(5)
  expect(result.modifiedSettings).toBe(state.modifiedSettings)
  expect(result.searchValue).toBe('test')
  expect(result.tabs).toBe(state.tabs)
})
