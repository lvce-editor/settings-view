import { expect, test } from '@jest/globals'
import { getSettingsViewportHeight } from '../src/parts/GetSettingsViewportHeight/GetSettingsViewportHeight.ts'

test('getSettingsViewportHeight subtracts the settings heading and padding', () => {
  expect(getSettingsViewportHeight(600)).toBe(486)
})

test('getSettingsViewportHeight never returns a negative height', () => {
  expect(getSettingsViewportHeight(114)).toBe(0)
  expect(getSettingsViewportHeight(0)).toBe(0)
})
