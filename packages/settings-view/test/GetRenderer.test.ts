import { test, expect } from '@jest/globals'
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

test.skip('getRenderer throws error for RenderValue diff type', () => {
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
