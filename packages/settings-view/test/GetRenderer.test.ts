import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import { getRenderer } from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'
import { renderSettingValues } from '../src/parts/RenderSettingValues/RenderSettingValues.ts'
import { renderValue } from '../src/parts/RenderValue/RenderValue.ts'
import { renderScrollOffset } from '../src/parts/RenderScrollOffset/RenderScrollOffset.ts'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import { renderFocus } from '../src/parts/RenderFocus/RenderFocus.ts'

test('getRenderer returns renderItems for DiffType.RenderItems', () => {
  const renderer = getRenderer(DiffType.RenderItems)
  expect(renderer).toBe(RenderItems.renderItems)
})

test('getRenderer returns renderValue for DiffType.RenderValue', () => {
  const renderer = getRenderer(DiffType.RenderValue)
  expect(renderer).toBe(renderValue)
})

test('getRenderer returns renderSettingValues for DiffType.RenderSettingValues', () => {
  const renderer = getRenderer(DiffType.RenderSettingValues)
  expect(renderer).toBe(renderSettingValues)
})

test('getRenderer returns renderScrollOffset for DiffType.RenderScrollOffset', () => {
  const renderer = getRenderer(DiffType.RenderScrollOffset)
  expect(renderer).toBe(renderScrollOffset)
})

test('getRenderer returns renderFocusContext for DiffType.RenderFocusContext', () => {
  const renderer = getRenderer(DiffType.RenderFocusContext)
  expect(renderer).toBe(renderFocusContext)
})

test('getRenderer returns renderFocus for DiffType.RenderFocus', () => {
  const renderer = getRenderer(DiffType.RenderFocus)
  expect(renderer).toBe(renderFocus)
})

test('getRenderer throws error for unknown diff type', () => {
  expect(() => getRenderer(999)).toThrow('unknown renderer')
})
