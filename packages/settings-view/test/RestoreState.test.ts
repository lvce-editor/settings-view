import { test, expect } from '@jest/globals'
import { restoreState } from '../src/parts/RestoreState/RestoreState.ts'

test('restoreState returns default values when savedState is null', () => {
  const result = restoreState(null)

  expect(result).toEqual({
    deltaY: 0,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState returns default values when savedState is undefined', () => {
  const result = restoreState(undefined)

  expect(result).toEqual({
    deltaY: 0,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState returns default values when savedState is empty object', () => {
  const result = restoreState({})

  expect(result).toEqual({
    deltaY: 0,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState returns default values when savedState is not an object', () => {
  const result = restoreState('not an object')

  expect(result).toEqual({
    deltaY: 0,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState returns default values when savedState is a number', () => {
  const result = restoreState(123)

  expect(result).toEqual({
    deltaY: 0,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState returns default values when savedState is a boolean', () => {
  const result = restoreState(true)

  expect(result).toEqual({
    deltaY: 0,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState extracts minLineY correctly', () => {
  const savedState = {
    deltaY: 75,
    minLineY: 200,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: 75,
    history: [],
    historyIndex: -1,
    minLineY: 200,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState extracts deltaY correctly', () => {
  const savedState = {
    deltaY: 150,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: 150,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState handles all properties correctly', () => {
  const savedState = {
    deltaY: 200,
    minLineY: 300,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: 200,
    history: [],
    historyIndex: -1,
    minLineY: 300,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState handles minLineY as non-number', () => {
  const savedState = {
    deltaY: 50,
    minLineY: 'not a number',
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: 50,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState handles deltaY as non-number', () => {
  const savedState = {
    deltaY: 'not a number',
    minLineY: 100,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: 0,
    history: [],
    historyIndex: -1,
    minLineY: 100,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState handles negative values', () => {
  const savedState = {
    deltaY: -50,
    minLineY: -100,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: -50,
    history: [],
    historyIndex: -1,
    minLineY: -100,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState handles zero values', () => {
  const savedState = {
    deltaY: 0,
    minLineY: 0,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: 0,
    history: [],
    historyIndex: -1,
    minLineY: 0,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState handles large values', () => {
  const savedState = {
    deltaY: 999_999,
    minLineY: 999_999,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: 999_999,
    history: [],
    historyIndex: -1,
    minLineY: 999_999,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState handles extra properties in savedState', () => {
  const savedState = {
    anotherProperty: 123,
    deltaY: 50,
    extraProperty: 'should be ignored',
    minLineY: 100,
  }

  const result = restoreState(savedState)

  expect(result).toEqual({
    deltaY: 50,
    history: [],
    historyIndex: -1,
    minLineY: 100,
    scrollOffset: 0,
    searchValue: '',
    sideBarWidth: 200,
    tabId: '',
  })
})

test('restoreState extracts history correctly', () => {
  const savedState = {
    history: ['search1', 'search2', 'search3'],
    historyIndex: 1,
  }

  const result = restoreState(savedState)

  expect(result.history).toEqual(['search1', 'search2', 'search3'])
  expect(result.historyIndex).toBe(1)
})

test('restoreState limits history to 10 items', () => {
  const savedState = {
    history: ['search1', 'search2', 'search3', 'search4', 'search5', 'search6', 'search7', 'search8', 'search9', 'search10', 'search11', 'search12'],
    historyIndex: 11,
  }

  const result = restoreState(savedState)

  expect(result.history).toEqual(['search3', 'search4', 'search5', 'search6', 'search7', 'search8', 'search9', 'search10', 'search11', 'search12'])
  expect(result.historyIndex).toBe(-1) // Index is out of bounds after limiting
})

test('restoreState filters non-string history items', () => {
  const savedState = {
    history: ['search1', 123, 'search2', null, 'search3', undefined, 'search4'],
    historyIndex: 3,
  }

  const result = restoreState(savedState)

  expect(result.history).toEqual(['search1', 'search2', 'search3', 'search4'])
  expect(result.historyIndex).toBe(3) // Index 3 corresponds to 'search4' which is still valid
})

test('restoreState handles historyIndex out of bounds', () => {
  const savedState = {
    history: ['search1', 'search2'],
    historyIndex: 5, // Out of bounds
  }

  const result = restoreState(savedState)

  expect(result.history).toEqual(['search1', 'search2'])
  expect(result.historyIndex).toBe(-1)
})

test('restoreState handles historyIndex as non-number', () => {
  const savedState = {
    history: ['search2'],
    historyIndex: 'not a number',
  }

  const result = restoreState(savedState)

  expect(result.history).toEqual(['search2'])
  expect(result.historyIndex).toBe(-1)
})

test('restoreState handles history as non-array', () => {
  const savedState = {
    history: 'not an array',
    historyIndex: 0,
  }

  const result = restoreState(savedState)

  expect(result.history).toEqual([])
  expect(result.historyIndex).toBe(-1)
})

test('restoreState extracts sideBarWidth correctly', () => {
  const savedState = {
    sideBarWidth: 300,
  }

  const result = restoreState(savedState)

  expect(result.sideBarWidth).toBe(300)
})

test('restoreState handles sideBarWidth as non-number', () => {
  const savedState = {
    sideBarWidth: 'not a number',
  }

  const result = restoreState(savedState)

  expect(result.sideBarWidth).toBe(200)
})
