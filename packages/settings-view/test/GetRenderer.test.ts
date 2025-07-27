import { test, expect } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import { getRenderer } from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'

test('getRenderer returns renderItems for RenderItems diff type', () => {
  const renderer = getRenderer(DiffType.RenderItems)

  expect(typeof renderer).toBe('function')
  expect(renderer).toBe(RenderItems.renderItems)
})

test('getRenderer throws error for unknown diff type', () => {
  expect(() => {
    getRenderer(999)
  }).toThrow('unknown renderer')
})

test('getRenderer throws error for RenderFocus diff type', () => {
  expect(() => {
    getRenderer(DiffType.RenderFocus)
  }).toThrow('unknown renderer')
})

test('getRenderer throws error for RenderValue diff type', () => {
  expect(() => {
    getRenderer(DiffType.RenderValue)
  }).toThrow('unknown renderer')
})

test('getRenderer throws error for RenderReplaceValue diff type', () => {
  expect(() => {
    getRenderer(DiffType.RenderReplaceValue)
  }).toThrow('unknown renderer')
})

test('getRenderer throws error for RenderIncludeValue diff type', () => {
  expect(() => {
    getRenderer(DiffType.RenderIncludeValue)
  }).toThrow('unknown renderer')
})

test('getRenderer throws error for RenderExcludeValue diff type', () => {
  expect(() => {
    getRenderer(DiffType.RenderExcludeValue)
  }).toThrow('unknown renderer')
})

test('getRenderer throws error for RenderFocusContext diff type', () => {
  expect(() => {
    getRenderer(DiffType.RenderFocusContext)
  }).toThrow('unknown renderer')
})

test('getRenderer throws error for RenderSelection diff type', () => {
  expect(() => {
    getRenderer(DiffType.RenderSelection)
  }).toThrow('unknown renderer')
})

test('getRenderer throws error for RenderPauseOnExceptions diff type', () => {
  expect(() => {
    getRenderer(DiffType.RenderPauseOnExceptions)
  }).toThrow('unknown renderer')
})

test('getRenderer returns function that can be called with SettingsState', () => {
  const renderer = getRenderer(DiffType.RenderItems)

  const mockOldState: SettingsState = {
    breakPointsExpanded: false,
    breakPointsVisible: true,
    focus: 0,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  const mockNewState: SettingsState = {
    breakPointsExpanded: true,
    breakPointsVisible: false,
    focus: 5,
    id: 1,
    uri: 'test://uri',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  }

  const result = renderer(mockOldState, mockNewState)

  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(mockNewState.id)
  expect(Array.isArray(result[2])).toBe(true)
})
