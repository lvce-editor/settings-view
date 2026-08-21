import { test, expect } from '@jest/globals'
import { commandMap } from '../src/parts/CommandMap/CommandMap.ts'
import { getMenuEntries } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'
import { getCommandIds, registerCommands } from '../src/parts/SettingsStates/SettingsStates.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getMenuEntries returns all menu entries with i18n labels', () => {
  const menuEntries = getMenuEntries()
  expect(menuEntries.length).toBe(10)

  const advancedEntry = menuEntries.find((entry) => entry.id === 'filter-advanced')
  expect(advancedEntry).toBeDefined()
  expect(advancedEntry?.label).toBe(SettingStrings.advanced())
  expect(advancedEntry?.command).toBe('Settings.filterAdvanced')

  const experimentalEntry = menuEntries.find((entry) => entry.id === 'filter-experimental')
  expect(experimentalEntry).toBeDefined()
  expect(experimentalEntry?.label).toBe(SettingStrings.experimental())
  expect(experimentalEntry?.command).toBe('Settings.filterExperimental')

  const extensionIdEntry = menuEntries.find((entry) => entry.id === 'filter-extensionId')
  expect(extensionIdEntry).toBeDefined()
  expect(extensionIdEntry?.label).toBe(SettingStrings.extensionId())
  expect(extensionIdEntry?.command).toBe('Settings.filterExtensionId')

  const featureEntry = menuEntries.find((entry) => entry.id === 'filter-feature')
  expect(featureEntry).toBeDefined()
  expect(featureEntry?.label).toBe(SettingStrings.feature())
  expect(featureEntry?.command).toBe('Settings.filterFeature')

  const languageEntry = menuEntries.find((entry) => entry.id === 'filter-language')
  expect(languageEntry).toBeDefined()
  expect(languageEntry?.label).toBe(SettingStrings.language())
  expect(languageEntry?.command).toBe('Settings.filterLanguage')

  const modifiedEntry = menuEntries.find((entry) => entry.id === 'filter-modified')
  expect(modifiedEntry).toBeDefined()
  expect(modifiedEntry?.label).toBe(SettingStrings.modified())
  expect(modifiedEntry?.command).toBe('Settings.filterModified')

  const previewEntry = menuEntries.find((entry) => entry.id === 'filter-preview')
  expect(previewEntry).toBeDefined()
  expect(previewEntry?.label).toBe(SettingStrings.preview())
  expect(previewEntry?.command).toBe('Settings.filterPreview')

  const settingIdEntry = menuEntries.find((entry) => entry.id === 'filter-settingId')
  expect(settingIdEntry).toBeDefined()
  expect(settingIdEntry?.label).toBe(SettingStrings.settingId())
  expect(settingIdEntry?.command).toBe('Settings.filterSettingId')

  const stableEntry = menuEntries.find((entry) => entry.id === 'filter-stable')
  expect(stableEntry).toBeDefined()
  expect(stableEntry?.label).toBe(SettingStrings.stable())
  expect(stableEntry?.command).toBe('Settings.filterStable')

  const tagEntry = menuEntries.find((entry) => entry.id === 'filter-tag')
  expect(tagEntry).toBeDefined()
  expect(tagEntry?.label).toBe(SettingStrings.tag())
  expect(tagEntry?.command).toBe('Settings.filterTag')
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

test('every menu entry references a registered command', () => {
  const menuEntries = getMenuEntries()
  for (const entry of menuEntries) {
    expect(Object.hasOwn(commandMap, entry.command)).toBe(true)
  }
})

test('every menu command is exposed under the renderer command id', () => {
  registerCommands(commandMap)
  const rendererCommandIds = new Set(getCommandIds().map((id) => (id.includes('.') ? id : `Settings.${id}`)))
  for (const entry of getMenuEntries()) {
    expect(rendererCommandIds.has(entry.command)).toBe(true)
  }
})
