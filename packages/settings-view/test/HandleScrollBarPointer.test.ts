import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleScrollBarPointerCaptureLost } from '../src/parts/HandleScrollBarPointerCaptureLost/HandleScrollBarPointerCaptureLost.ts'
import { handleScrollBarPointerDown } from '../src/parts/HandleScrollBarPointerDown/HandleScrollBarPointerDown.ts'
import { handleScrollBarPointerMove } from '../src/parts/HandleScrollBarPointerMove/HandleScrollBarPointerMove.ts'

const createScrollableState = (): ReturnType<typeof createDefaultState> => ({
  ...createDefaultState(),
  filteredItems: Array.from({ length: 100 }, (_, index) => ({
    category: '',
    description: '',
    errorMessage: '',
    hasError: false,
    heading: '',
    id: String(index),
    isModified: false,
    type: 0,
    value: '',
  })),
  height: 600,
  itemHeight: 100,
  scrollBarThumbHeight: 20,
  width: 900,
  x: 200,
  y: 50,
})

test('handleScrollBarPointerDown starts dragging without jumping when grabbed inside the thumb', () => {
  const state = createScrollableState()
  const result = handleScrollBarPointerDown(state, 151 + 8, 486)
  expect(result.scrollBarActive).toBe(true)
  expect(result.scrollBarHandleOffset).toBe(159)
  expect(result.scrollOffset).toBe(0)
})

test('handleScrollBarPointerMove maps pointer movement to the scroll range and clamps both ends', () => {
  const state = {
    ...createScrollableState(),
    scrollBarActive: true,
    scrollBarHandleOffset: 159,
    scrollBarTrackHeight: 486,
  }
  const atBottom = handleScrollBarPointerMove(state, 50 + 600 + 200)
  expect(atBottom.scrollOffset).toBe(10_000 - (600 - 114))
  const atTop = handleScrollBarPointerMove(atBottom, 50 - 100)
  expect(atTop.scrollOffset).toBe(0)
})

test('handleScrollBarPointerMove does nothing when dragging is inactive', () => {
  const state = createScrollableState()
  expect(handleScrollBarPointerMove(state, 1000)).toBe(state)
})

test('handleScrollBarPointerDown does nothing when settings content fits', () => {
  const state = {
    ...createDefaultState(),
    filteredItems: [],
    height: 600,
    itemHeight: 100,
  }
  expect(handleScrollBarPointerDown(state, 200, 486)).toBe(state)
})

test('handleScrollBarPointerCaptureLost ends dragging', () => {
  const state = {
    ...createScrollableState(),
    scrollBarActive: true,
    scrollBarHandleOffset: 159,
    scrollBarTrackHeight: 486,
  }
  const result = handleScrollBarPointerCaptureLost(state)
  expect(result.scrollBarActive).toBe(false)
  expect(result.scrollBarHandleOffset).toBeUndefined()
})

test('dragging a scrolled thumb uses the rendered track height and preserves its grab position', () => {
  const state = { ...createScrollableState(), scrollBarThumbTop: 200, scrollOffset: 4000 }
  const pressed = handleScrollBarPointerDown(state, 750, 526)
  expect(pressed.scrollOffset).toBe(4000)
  expect(pressed.scrollBarThumbTop).toBe(200)
  const moved = handleScrollBarPointerMove(pressed, 775)
  expect(moved.scrollBarThumbTop).toBe(225)
  const bottom = handleScrollBarPointerMove(pressed, 2000)
  expect(bottom.scrollBarThumbTop).toBe(506)
  expect(bottom.scrollOffset).toBe(9514)
})
