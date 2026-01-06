import { test, expect } from '@jest/globals'
import { getMenuEntries } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getMenuEntries returns all menu entries with i18n labels', () => {
  const menuEntries = getMenuEntries()
  expect(menuEntries.length).toBe(10)

  const advancedEntry = menuEntries.find((entry) => entry.id === 'filter-advanced')
  expect(advancedEntry).toBeDefined()
  expect(advancedEntry?.label).toBe(SettingStrings.advanced())
  expect(advancedEntry?.command).toBe('Settings.filter.advanced')

  const experimentalEntry = menuEntries.find((entry) => entry.id === 'filter-experimental')
  expect(experimentalEntry).toBeDefined()
  expect(experimentalEntry?.label).toBe(SettingStrings.experimental())
  expect(experimentalEntry?.command).toBe('Settings.filter.experimental')

  const extensionIdEntry = menuEntries.find((entry) => entry.id === 'filter-extensionId')
  expect(extensionIdEntry).toBeDefined()
  expect(extensionIdEntry?.label).toBe(SettingStrings.extensionId())
  expect(extensionIdEntry?.command).toBe('Settings.filter.extensionId')

  const featureEntry = menuEntries.find((entry) => entry.id === 'filter-feature')
  expect(featureEntry).toBeDefined()
  expect(featureEntry?.label).toBe(SettingStrings.feature())
  expect(featureEntry?.command).toBe('Settings.filter.feature')

  const languageEntry = menuEntries.find((entry) => entry.id === 'filter-language')
  expect(languageEntry).toBeDefined()
  expect(languageEntry?.label).toBe(SettingStrings.language())
  expect(languageEntry?.command).toBe('Settings.filter.language')

  const modifiedEntry = menuEntries.find((entry) => entry.id === 'filter-modified')
  expect(modifiedEntry).toBeDefined()
  expect(modifiedEntry?.label).toBe(SettingStrings.modified())
  expect(modifiedEntry?.command).toBe('Settings.filter.modified')

  const previewEntry = menuEntries.find((entry) => entry.id === 'filter-preview')
  expect(previewEntry).toBeDefined()
  expect(previewEntry?.label).toBe(SettingStrings.preview())
  expect(previewEntry?.command).toBe('Settings.filter.preview')

  const settingIdEntry = menuEntries.find((entry) => entry.id === 'filter-settingId')
  expect(settingIdEntry).toBeDefined()
  expect(settingIdEntry?.label).toBe(SettingStrings.settingId())
  expect(settingIdEntry?.command).toBe('Settings.filter.settingId')

  const stableEntry = menuEntries.find((entry) => entry.id === 'filter-stable')
  expect(stableEntry).toBeDefined()
  expect(stableEntry?.label).toBe(SettingStrings.stable())
  expect(stableEntry?.command).toBe('Settings.filter.stable')

  const tagEntry = menuEntries.find((entry) => entry.id === 'filter-tag')
  expect(tagEntry).toBeDefined()
  expect(tagEntry?.label).toBe(SettingStrings.tag())
  expect(tagEntry?.command).toBe('Settings.filter.tag')
})

test('getMenuEntries returns entries in correct order', () => {
  const menuEntries = getMenuEntries()
  expect(menuEntries[0].id).toBe('filter-advanced')
  expect(menuEntries[1].id).toBe('filter-experimental')
  expect(menuEntries[2].id).toBe('filter-extensionId')
  expect(menuEntries[3].id).toBe('filter-feature')
  expect(menuEntries[4].id).toBe('filter-language')
  expect(menuEntries[5].id).toBe('filter-modified')
  expect(menuEntries[6].id).toBe('filter-preview')
  expect(menuEntries[7].id).toBe('filter-settingId')
  expect(menuEntries[8].id).toBe('filter-stable')
  expect(menuEntries[9].id).toBe('filter-tag')
})
