import { test, expect } from '@jest/globals'
import { getSavedSideBarWidth } from '../src/parts/RestoreState/GetSavedSideBarWidth.ts'

test('getSavedSideBarWidth returns 200 when savedState is null', () => {
  const result: number = getSavedSideBarWidth(null)

  expect(result).toBe(200)
})

test('getSavedSideBarWidth returns 200 when savedState is undefined', () => {
  const result: number = getSavedSideBarWidth(undefined)

  expect(result).toBe(200)
})

test('getSavedSideBarWidth returns 200 when savedState is empty object', () => {
  const result: number = getSavedSideBarWidth({})

  expect(result).toBe(200)
})

test('getSavedSideBarWidth returns 200 when savedState is not an object', () => {
  const result: number = getSavedSideBarWidth('not an object')

  expect(result).toBe(200)
})

test('getSavedSideBarWidth returns 200 when savedState is a number', () => {
  const result: number = getSavedSideBarWidth(123)

  expect(result).toBe(200)
})

test('getSavedSideBarWidth returns 200 when savedState is a boolean', () => {
  const result: number = getSavedSideBarWidth(true)

  expect(result).toBe(200)
})

test('getSavedSideBarWidth extracts sideBarWidth correctly', () => {
  const savedState = {
    sideBarWidth: 300,
  }

  const result: number = getSavedSideBarWidth(savedState)

  expect(result).toBe(300)
})

test('getSavedSideBarWidth returns 200 when sideBarWidth is not a number', () => {
  const savedState = {
    sideBarWidth: 'not a number',
  }

  const result: number = getSavedSideBarWidth(savedState)

  expect(result).toBe(200)
})

test('getSavedSideBarWidth handles negative values', () => {
  const savedState = {
    sideBarWidth: -50,
  }

  const result: number = getSavedSideBarWidth(savedState)

  expect(result).toBe(-50)
})

test('getSavedSideBarWidth handles zero value', () => {
  const savedState = {
    sideBarWidth: 0,
  }

  const result: number = getSavedSideBarWidth(savedState)

  expect(result).toBe(0)
})

test('getSavedSideBarWidth handles large values', () => {
  const savedState = {
    sideBarWidth: 999_999,
  }

  const result: number = getSavedSideBarWidth(savedState)

  expect(result).toBe(999_999)
})

test('getSavedSideBarWidth handles extra properties in savedState', () => {
  const savedState = {
    anotherProperty: 123,
    extraProperty: 'should be ignored',
    sideBarWidth: 250,
  }

  const result: number = getSavedSideBarWidth(savedState)

  expect(result).toBe(250)
})

test('getSavedSideBarWidth returns 200 when sideBarWidth is null', () => {
  const savedState = {
    sideBarWidth: null,
  }

  const result: number = getSavedSideBarWidth(savedState)

  expect(result).toBe(200)
})

test('getSavedSideBarWidth returns 200 when sideBarWidth is undefined', () => {
  const savedState = {
    sideBarWidth: undefined,
  }

  const result: number = getSavedSideBarWidth(savedState)

  expect(result).toBe(200)
})
