import { test, expect } from '@jest/globals'
import type { ScrollBarMetrics } from '../src/parts/ComputeScrollBar/ComputeScrollBar.ts'
import { computeScrollBar } from '../src/parts/ComputeScrollBar/ComputeScrollBar.ts'

test('computeScrollBar: no items -> full height, top 0', () => {
  const height: number = 600
  const totalItemCount: number = 0
  const itemHeight: number = 100
  const scrollOffset: number = 0
  const scrollBarMinHeight: number = 20

  const result: ScrollBarMetrics = computeScrollBar(height, totalItemCount, itemHeight, scrollOffset, scrollBarMinHeight)

  expect(result).toEqual({ thumbHeight: 600, thumbTop: 0 })
})

test('computeScrollBar: enforces minimum thumb height', () => {
  const height: number = 600
  const totalItemCount: number = 10_000
  const itemHeight: number = 10
  const scrollOffset: number = 0
  const scrollBarMinHeight: number = 20

  const result: ScrollBarMetrics = computeScrollBar(height, totalItemCount, itemHeight, scrollOffset, scrollBarMinHeight)

  expect(result.thumbHeight).toBeGreaterThanOrEqual(scrollBarMinHeight)
})

test('computeScrollBar: proportional thumb height and position (min height not applied)', () => {
  const height: number = 600
  const totalItemCount: number = 100
  const itemHeight: number = 100
  const scrollBarMinHeight: number = 20

  // totalHeight = 10000 => proportional thumbHeight = floor((600/10000)*600) = 36
  // scrollable = 10000 - 600 = 9400
  // thumbMaxTop = 600 - 36 = 564
  // at 50% scroll: floor((4700/9400)*564) = 282
  const scrollOffset: number = 4700

  const result: ScrollBarMetrics = computeScrollBar(height, totalItemCount, itemHeight, scrollOffset, scrollBarMinHeight)

  expect(result.thumbHeight).toBe(36)
  expect(result.thumbTop).toBe(282)
})

test('computeScrollBar: honors larger scrollBarMinHeight', () => {
  const height: number = 600
  const totalItemCount: number = 100
  const itemHeight: number = 100
  const scrollBarMinHeight: number = 40

  // proportional would be 36, but min is 40
  // thumbMaxTop = 600 - 40 = 560
  // at 50% scroll: floor((4700/9400)*560) = 280
  const scrollOffset: number = 4700

  const result: ScrollBarMetrics = computeScrollBar(height, totalItemCount, itemHeight, scrollOffset, scrollBarMinHeight)

  expect(result.thumbHeight).toBe(40)
  expect(result.thumbTop).toBe(280)
})


