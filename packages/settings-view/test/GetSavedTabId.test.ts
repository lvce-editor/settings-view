import { test, expect } from '@jest/globals'
import { getSavedTabId } from '../src/parts/RestoreState/GetSavedTabId.ts'

test('getSavedTabId returns empty string when savedState is null', () => {
  const result: string = getSavedTabId(null)

  expect(result).toBe('')
})

test('getSavedTabId returns empty string when savedState is undefined', () => {
  const result: string = getSavedTabId(undefined)

  expect(result).toBe('')
})

test('getSavedTabId returns empty string when savedState is empty object', () => {
  const result: string = getSavedTabId({})

  expect(result).toBe('')
})

test('getSavedTabId returns empty string when savedState is not an object', () => {
  const result: string = getSavedTabId('not an object')

  expect(result).toBe('')
})

test('getSavedTabId returns empty string when savedState is a number', () => {
  const result: string = getSavedTabId(123)

  expect(result).toBe('')
})

test('getSavedTabId returns empty string when savedState is a boolean', () => {
  const result: string = getSavedTabId(true)

  expect(result).toBe('')
})

test('getSavedTabId extracts selectedTab correctly', () => {
  const savedState = {
    selectedTab: 'editor',
  }

  const result: string = getSavedTabId(savedState)

  expect(result).toBe('editor')
})

test('getSavedTabId returns empty string when selectedTab is not a string', () => {
  const savedState = {
    selectedTab: 123,
  }

  const result: string = getSavedTabId(savedState)

  expect(result).toBe('')
})

test('getSavedTabId handles empty string', () => {
  const savedState = {
    selectedTab: '',
  }

  const result: string = getSavedTabId(savedState)

  expect(result).toBe('')
})

test('getSavedTabId handles different tab IDs', () => {
  const savedState = {
    selectedTab: 'workbench',
  }

  const result: string = getSavedTabId(savedState)

  expect(result).toBe('workbench')
})

test('getSavedTabId handles extra properties in savedState', () => {
  const savedState = {
    anotherProperty: 123,
    extraProperty: 'should be ignored',
    selectedTab: 'window',
  }

  const result: string = getSavedTabId(savedState)

  expect(result).toBe('window')
})

test('getSavedTabId returns empty string when selectedTab is null', () => {
  const savedState = {
    selectedTab: null,
  }

  const result: string = getSavedTabId(savedState)

  expect(result).toBe('')
})

test('getSavedTabId returns empty string when selectedTab is undefined', () => {
  const savedState = {
    selectedTab: undefined,
  }

  const result: string = getSavedTabId(savedState)

  expect(result).toBe('')
})
