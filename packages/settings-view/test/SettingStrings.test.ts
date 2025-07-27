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

test('fontSize returns expected i18n string', () => {
  const result = SettingStrings.fontSize()
  expect(result).toBe('Font Size')
})

test('fontSizeDescription returns expected i18n string', () => {
  const result = SettingStrings.fontSizeDescription()
  expect(result).toBe('The font size of the editor')
})

test('fontFamily returns expected i18n string', () => {
  const result = SettingStrings.fontFamily()
  expect(result).toBe('Font Family')
})

test('fontFamilyDescription returns expected i18n string', () => {
  const result = SettingStrings.fontFamilyDescription()
  expect(result).toBe('The font family of the editor')
})

test('theme returns expected i18n string', () => {
  const result = SettingStrings.theme()
  expect(result).toBe('Theme')
})

test('themeDescription returns expected i18n string', () => {
  const result = SettingStrings.themeDescription()
  expect(result).toBe('The color theme of the workbench')
})

test('sidebarPosition returns expected i18n string', () => {
  const result = SettingStrings.sidebarPosition()
  expect(result).toBe('Sidebar Position')
})

test('sidebarPositionDescription returns expected i18n string', () => {
  const result = SettingStrings.sidebarPositionDescription()
  expect(result).toBe('The position of the sidebar')
})

test('windowTitle returns expected i18n string', () => {
  const result = SettingStrings.windowTitle()
  expect(result).toBe('Window Title')
})

test('windowTitleDescription returns expected i18n string', () => {
  const result = SettingStrings.windowTitleDescription()
  expect(result).toBe('The title shown in the window')
})

test('windowSize returns expected i18n string', () => {
  const result = SettingStrings.windowSize()
  expect(result).toBe('Window Size')
})

test('windowSizeDescription returns expected i18n string', () => {
  const result = SettingStrings.windowSizeDescription()
  expect(result).toBe('The default window size')
})

test('autoSave returns expected i18n string', () => {
  const result = SettingStrings.autoSave()
  expect(result).toBe('Auto Save')
})

test('autoSaveDescription returns expected i18n string', () => {
  const result = SettingStrings.autoSaveDescription()
  expect(result).toBe('Automatically save files')
})

test('formatOnSave returns expected i18n string', () => {
  const result = SettingStrings.formatOnSave()
  expect(result).toBe('Format on Save')
})

test('formatOnSaveDescription returns expected i18n string', () => {
  const result = SettingStrings.formatOnSaveDescription()
  expect(result).toBe('Format code when saving')
})

test('telemetry returns expected i18n string', () => {
  const result = SettingStrings.telemetry()
  expect(result).toBe('Telemetry')
})

test('telemetryDescription returns expected i18n string', () => {
  const result = SettingStrings.telemetryDescription()
  expect(result).toBe('Enable telemetry collection')
})

test('autoUpdates returns expected i18n string', () => {
  const result = SettingStrings.autoUpdates()
  expect(result).toBe('Auto Updates')
})

test('autoUpdatesDescription returns expected i18n string', () => {
  const result = SettingStrings.autoUpdatesDescription()
  expect(result).toBe('Automatically check for updates')
})

test('fileEncryption returns expected i18n string', () => {
  const result = SettingStrings.fileEncryption()
  expect(result).toBe('File Encryption')
})

test('fileEncryptionDescription returns expected i18n string', () => {
  const result = SettingStrings.fileEncryptionDescription()
  expect(result).toBe('Encrypt sensitive files')
})

test('twoFactorAuth returns expected i18n string', () => {
  const result = SettingStrings.twoFactorAuth()
  expect(result).toBe('Two Factor Auth')
})

test('twoFactorAuthDescription returns expected i18n string', () => {
  const result = SettingStrings.twoFactorAuthDescription()
  expect(result).toBe('Enable two factor authentication')
})

test('autoUpdateExtensions returns expected i18n string', () => {
  const result = SettingStrings.autoUpdateExtensions()
  expect(result).toBe('Auto Update Extensions')
})

test('autoUpdateExtensionsDescription returns expected i18n string', () => {
  const result = SettingStrings.autoUpdateExtensionsDescription()
  expect(result).toBe('Automatically update extensions')
})

test('extensionRecommendations returns expected i18n string', () => {
  const result = SettingStrings.extensionRecommendations()
  expect(result).toBe('Extension Recommendations')
})

test('extensionRecommendationsDescription returns expected i18n string', () => {
  const result = SettingStrings.extensionRecommendationsDescription()
  expect(result).toBe('Show extension recommendations')
})

test('addWatchExpression returns expected i18n string', () => {
  const result = SettingStrings.addWatchExpression()
  expect(result).toBe('Add Watch Expression')
})

test('refreshWatchExpressions returns expected i18n string', () => {
  const result = SettingStrings.refreshWatchExpressions()
  expect(result).toBe('Refresh Watch Expressions')
})

test('noSettingsMatching returns correct string with numbers', () => {
  const result = SettingStrings.noSettingsMatching('123')
  expect(result).toBe('No settings matching "123" found')
})

test('noSettingsMatching returns correct string with mixed content', () => {
  const result = SettingStrings.noSettingsMatching('Test123@#$%')
  expect(result).toBe('No settings matching "Test123@#$%" found')
})
