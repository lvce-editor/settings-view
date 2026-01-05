import { test, expect } from '@jest/globals'
import { getSavedScrollOffset } from '../src/parts/RestoreState/GetSavedScrollOffset.ts'

test('getSavedScrollOffset returns 0 when savedState is null', () => {
  const result: number = getSavedScrollOffset(null)

  expect(result).toBe(0)
})

test('getSavedScrollOffset returns 0 when savedState is undefined', () => {
  const result: number = getSavedScrollOffset(undefined)

  expect(result).toBe(0)
})

test('getSavedScrollOffset returns 0 when savedState is empty object', () => {
  const result: number = getSavedScrollOffset({})

  expect(result).toBe(0)
})

test('getSavedScrollOffset returns 0 when savedState is not an object', () => {
  const result: number = getSavedScrollOffset('not an object')

  expect(result).toBe(0)
})

test('getSavedScrollOffset returns 0 when savedState is a number', () => {
  const result: number = getSavedScrollOffset(123)

  expect(result).toBe(0)
})

test('getSavedScrollOffset returns 0 when savedState is a boolean', () => {
  const result: number = getSavedScrollOffset(true)

  expect(result).toBe(0)
})

test('getSavedScrollOffset extracts scrollOffset correctly', () => {
  const savedState = {
    scrollOffset: 100,
  }

  const result: number = getSavedScrollOffset(savedState)

  expect(result).toBe(100)
})

test('getSavedScrollOffset returns 0 when scrollOffset is not a number', () => {
  const savedState = {
    scrollOffset: 'not a number',
  }

  const result: number = getSavedScrollOffset(savedState)

  expect(result).toBe(0)
})

test('getSavedScrollOffset handles negative values', () => {
  const savedState = {
    scrollOffset: -50,
  }

  const result: number = getSavedScrollOffset(savedState)

  expect(result).toBe(-50)
})

test('getSavedScrollOffset handles zero value', () => {
  const savedState = {
    scrollOffset: 0,
  }

  const result: number = getSavedScrollOffset(savedState)

  expect(result).toBe(0)
})

test('getSavedScrollOffset handles large values', () => {
  const savedState = {
    scrollOffset: 999_999,
  }

  const result: number = getSavedScrollOffset(savedState)

  expect(result).toBe(999_999)
})

test('getSavedScrollOffset handles extra properties in savedState', () => {
  const savedState = {
    anotherProperty: 123,
    extraProperty: 'should be ignored',
    scrollOffset: 200,
  }

  const result: number = getSavedScrollOffset(savedState)

  expect(result).toBe(200)
})

test('getSavedScrollOffset returns 0 when scrollOffset is null', () => {
  const savedState = {
    scrollOffset: null,
  }

  const result: number = getSavedScrollOffset(savedState)

  expect(result).toBe(0)
})

test('getSavedScrollOffset returns 0 when scrollOffset is undefined', () => {
  const savedState = {
    scrollOffset: undefined,
  }

  const result: number = getSavedScrollOffset(savedState)

  expect(result).toBe(0)
})
