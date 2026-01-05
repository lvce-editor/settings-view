import { test, expect } from '@jest/globals'
import { getSavedSearchValue } from '../src/parts/RestoreState/GetSavedSearchValue.ts'

test('getSavedSearchValue returns empty string when savedState is null', () => {
  const result: string = getSavedSearchValue(null)

  expect(result).toBe('')
})

test('getSavedSearchValue returns empty string when savedState is undefined', () => {
  const result: string = getSavedSearchValue(undefined)

  expect(result).toBe('')
})

test('getSavedSearchValue returns empty string when savedState is empty object', () => {
  const result: string = getSavedSearchValue({})

  expect(result).toBe('')
})

test('getSavedSearchValue returns empty string when savedState is not an object', () => {
  const result: string = getSavedSearchValue('not an object')

  expect(result).toBe('')
})

test('getSavedSearchValue returns empty string when savedState is a number', () => {
  const result: string = getSavedSearchValue(123)

  expect(result).toBe('')
})

test('getSavedSearchValue returns empty string when savedState is a boolean', () => {
  const result: string = getSavedSearchValue(true)

  expect(result).toBe('')
})

test('getSavedSearchValue extracts searchValue correctly', () => {
  const savedState = {
    searchValue: 'test search',
  }

  const result: string = getSavedSearchValue(savedState)

  expect(result).toBe('test search')
})

test('getSavedSearchValue returns empty string when searchValue is not a string', () => {
  const savedState = {
    searchValue: 123,
  }

  const result: string = getSavedSearchValue(savedState)

  expect(result).toBe('')
})

test('getSavedSearchValue handles empty string', () => {
  const savedState = {
    searchValue: '',
  }

  const result: string = getSavedSearchValue(savedState)

  expect(result).toBe('')
})

test('getSavedSearchValue handles long strings', () => {
  const savedState = {
    searchValue: 'a'.repeat(1000),
  }

  const result: string = getSavedSearchValue(savedState)

  expect(result).toBe('a'.repeat(1000))
})

test('getSavedSearchValue handles extra properties in savedState', () => {
  const savedState = {
    anotherProperty: 123,
    extraProperty: 'should be ignored',
    searchValue: 'my search',
  }

  const result: string = getSavedSearchValue(savedState)

  expect(result).toBe('my search')
})

test('getSavedSearchValue returns empty string when searchValue is null', () => {
  const savedState = {
    searchValue: null,
  }

  const result: string = getSavedSearchValue(savedState)

  expect(result).toBe('')
})

test('getSavedSearchValue returns empty string when searchValue is undefined', () => {
  const savedState = {
    searchValue: undefined,
  }

  const result: string = getSavedSearchValue(savedState)

  expect(result).toBe('')
})

test('getSavedSearchValue handles special characters', () => {
  const savedState = {
    searchValue: 'test@#$%^&*()',
  }

  const result: string = getSavedSearchValue(savedState)

  expect(result).toBe('test@#$%^&*()')
})
