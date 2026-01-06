import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderCss } from '../src/parts/RenderCss/RenderCss.ts'

test('renderCss returns correct ViewletCommand with default state', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = createDefaultState()

  const result = renderCss(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetCss)
  expect(result[1]).toBe(newState.id)
  expect(result[2]).toBe(
    `
.Settings {
  --SettingsSideBarWidth: ${newState.sideBarWidth}px;
  --ScrollBarThumbHeight: ${newState.scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${newState.scrollBarThumbTop}px;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`,
  )
})

test('renderCss uses id from newState', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), id: 42 }

  const result = renderCss(oldState, newState)

  expect(result[1]).toBe(42)
})

test('renderCss uses sideBarWidth from newState', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 300 }

  const result = renderCss(oldState, newState)

  expect(result[2]).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 300px;
  --ScrollBarThumbHeight: ${newState.scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${newState.scrollBarThumbTop}px;
}
.SettingsResizer {
  background: yellow;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`,
  )
})

test('renderCss ignores oldState values', () => {
  const oldState: SettingsState = { ...createDefaultState(), id: 100, sideBarWidth: 500 }
  const newState: SettingsState = { ...createDefaultState(), id: 200, sideBarWidth: 250 }

  const result = renderCss(oldState, newState)

  expect(result[1]).toBe(200)
  expect(result[1]).not.toBe(100)
  expect(result[2]).toContain('250px')
  expect(result[2]).not.toContain('500px')
})

test('renderCss works with different sideBarWidth values', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 150 }

  const result = renderCss(oldState, newState)

  expect(result[2]).toContain('150px')
})

test('renderCss works with zero sideBarWidth', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), sideBarWidth: 0 }

  const result = renderCss(oldState, newState)

  expect(result[2]).toContain('0px')
})

test('renderCss returns correct command structure', () => {
  const oldState: SettingsState = createDefaultState()
  const newState: SettingsState = { ...createDefaultState(), id: 7, sideBarWidth: 180 }

  const result = renderCss(oldState, newState)

  expect(result.length).toBe(3)
  expect(typeof result[0]).toBe('string')
  expect(typeof result[1]).toBe('number')
  expect(typeof result[2]).toBe('string')
})
