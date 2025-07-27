import { expect, test } from '@jest/globals'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('clear returns expected i18n string', () => {
  const result = SettingStrings.clear()
  expect(result).toBe('Clear')
})

test('numberValue returns expected i18n string', () => {
  const result = SettingStrings.numberValue()
  expect(result).toBe('number value')
})

test('searchSettings returns expected i18n string', () => {
  const result = SettingStrings.searchSettings()
  expect(result).toBe('Search Settings')
})

test('settingsContent returns expected i18n string', () => {
  const result = SettingStrings.settingsContent()
  expect(result).toBe('Settings Content')
})

test('settingsSideBar returns expected i18n string', () => {
  const result = SettingStrings.settingsSideBar()
  expect(result).toBe('Settings SideBar')
})

test('all functions return non-empty strings', () => {
  const functions = [
    SettingStrings.clear,
    SettingStrings.numberValue,
    SettingStrings.searchSettings,
    SettingStrings.settingsContent,
    SettingStrings.settingsSideBar,
  ]

  for (const func of functions) {
    const result = func()
    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
    expect(result.length).toBeGreaterThan(0)
  }
})

test('functions return consistent results on multiple calls', () => {
  const functions = [
    SettingStrings.clear,
    SettingStrings.numberValue,
    SettingStrings.searchSettings,
    SettingStrings.settingsContent,
    SettingStrings.settingsSideBar,
  ]

  for (const func of functions) {
    const firstCall = func()
    const secondCall = func()
    const thirdCall = func()

    expect(firstCall).toBe(secondCall)
    expect(secondCall).toBe(thirdCall)
    expect(firstCall).toBe(thirdCall)
  }
})
