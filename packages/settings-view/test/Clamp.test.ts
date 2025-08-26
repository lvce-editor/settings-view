import { expect, test } from '@jest/globals'
import { clamp } from '../src/parts/Clamp/Clamp.ts'

test('clamp returns value within range', () => {
  expect(clamp(5, 0, 10)).toBe(5)
})

test('clamp clamps below min', () => {
  expect(clamp(-1, 0, 10)).toBe(0)
})

test('clamp clamps above max', () => {
  expect(clamp(11, 0, 10)).toBe(10)
})

test('clamp handles NaN as min', () => {
  expect(clamp(Number.NaN, 0, 10)).toBe(0)
})

test('clamp handles max < min by returning min', () => {
  expect(clamp(5, 10, 0)).toBe(10)
})
