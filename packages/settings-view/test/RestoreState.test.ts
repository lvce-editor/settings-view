import { test, expect } from '@jest/globals'
import { restoreState } from '../src/parts/RestoreState/RestoreState.ts'

test('restoreState returns default values when savedState is null', () => {
  const result = restoreState(null)

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 0,
    deltaY: 0,
  })
})

test('restoreState returns default values when savedState is undefined', () => {
  const result = restoreState(undefined)

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 0,
    deltaY: 0,
  })
})

test('restoreState returns default values when savedState is empty object', () => {
  const result = restoreState({})

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 0,
    deltaY: 0,
  })
})

test('restoreState returns default values when savedState is not an object', () => {
  const result = restoreState('not an object')

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 0,
    deltaY: 0,
  })
})

test('restoreState returns default values when savedState is a number', () => {
  const result = restoreState(123)

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 0,
    deltaY: 0,
  })
})

test('restoreState returns default values when savedState is a boolean', () => {
  const result = restoreState(true)

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 0,
    deltaY: 0,
  })
})

test('restoreState extracts workspacePath correctly', () => {
  const savedState = {
    workspacePath: '/path/to/workspace',
    minLineY: 100,
    deltaY: 50,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '/path/to/workspace',
    minLineY: 100,
    deltaY: 50,
  })
})

test('restoreState extracts minLineY correctly', () => {
  const savedState = {
    minLineY: 200,
    deltaY: 75,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 200,
    deltaY: 75,
  })
})

test('restoreState extracts deltaY correctly', () => {
  const savedState = {
    deltaY: 150,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 0,
    deltaY: 150,
  })
})

test('restoreState handles all properties correctly', () => {
  const savedState = {
    workspacePath: '/home/user/project',
    minLineY: 300,
    deltaY: 200,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '/home/user/project',
    minLineY: 300,
    deltaY: 200,
  })
})

test('restoreState handles workspacePath as non-string', () => {
  const savedState = {
    workspacePath: 123,
    minLineY: 100,
    deltaY: 50,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 100,
    deltaY: 50,
  })
})

test('restoreState handles minLineY as non-number', () => {
  const savedState = {
    workspacePath: '/path/to/workspace',
    minLineY: 'not a number',
    deltaY: 50,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '/path/to/workspace',
    minLineY: 0,
    deltaY: 50,
  })
})

test('restoreState handles deltaY as non-number', () => {
  const savedState = {
    workspacePath: '/path/to/workspace',
    minLineY: 100,
    deltaY: 'not a number',
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '/path/to/workspace',
    minLineY: 100,
    deltaY: 0,
  })
})

test('restoreState handles negative values', () => {
  const savedState = {
    workspacePath: '/negative/path',
    minLineY: -100,
    deltaY: -50,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '/negative/path',
    minLineY: -100,
    deltaY: -50,
  })
})

test('restoreState handles zero values', () => {
  const savedState = {
    workspacePath: '',
    minLineY: 0,
    deltaY: 0,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '',
    minLineY: 0,
    deltaY: 0,
  })
})

test('restoreState handles large values', () => {
  const savedState = {
    workspacePath: '/very/long/path/to/workspace',
    minLineY: 999_999,
    deltaY: 999_999,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '/very/long/path/to/workspace',
    minLineY: 999_999,
    deltaY: 999_999,
  })
})

test('restoreState handles extra properties in savedState', () => {
  const savedState = {
    workspacePath: '/path/to/workspace',
    minLineY: 100,
    deltaY: 50,
    extraProperty: 'should be ignored',
    anotherProperty: 123,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    tabId: '',
    root: '/path/to/workspace',
    minLineY: 100,
    deltaY: 50,
  })
})
