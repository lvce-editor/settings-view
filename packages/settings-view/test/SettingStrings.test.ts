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

test('all functions return non-empty strings', () => {
  const functions = [
    SettingStrings.clear,
    SettingStrings.numberValue,
    SettingStrings.searchSettings,
    SettingStrings.settingsContent,
    SettingStrings.settingsSideBar,
    SettingStrings.fontSize,
    SettingStrings.fontSizeDescription,
    SettingStrings.fontFamily,
    SettingStrings.fontFamilyDescription,
    SettingStrings.theme,
    SettingStrings.themeDescription,
    SettingStrings.sidebarPosition,
    SettingStrings.sidebarPositionDescription,
    SettingStrings.windowTitle,
    SettingStrings.windowTitleDescription,
    SettingStrings.windowSize,
    SettingStrings.windowSizeDescription,
    SettingStrings.autoSave,
    SettingStrings.autoSaveDescription,
    SettingStrings.formatOnSave,
    SettingStrings.formatOnSaveDescription,
    SettingStrings.telemetry,
    SettingStrings.telemetryDescription,
    SettingStrings.autoUpdates,
    SettingStrings.autoUpdatesDescription,
    SettingStrings.fileEncryption,
    SettingStrings.fileEncryptionDescription,
    SettingStrings.twoFactorAuth,
    SettingStrings.twoFactorAuthDescription,
    SettingStrings.autoUpdateExtensions,
    SettingStrings.autoUpdateExtensionsDescription,
    SettingStrings.extensionRecommendations,
    SettingStrings.extensionRecommendationsDescription,
    SettingStrings.addWatchExpression,
    SettingStrings.refreshWatchExpressions,
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
    SettingStrings.fontSize,
    SettingStrings.fontSizeDescription,
    SettingStrings.fontFamily,
    SettingStrings.fontFamilyDescription,
    SettingStrings.theme,
    SettingStrings.themeDescription,
    SettingStrings.sidebarPosition,
    SettingStrings.sidebarPositionDescription,
    SettingStrings.windowTitle,
    SettingStrings.windowTitleDescription,
    SettingStrings.windowSize,
    SettingStrings.windowSizeDescription,
    SettingStrings.autoSave,
    SettingStrings.autoSaveDescription,
    SettingStrings.formatOnSave,
    SettingStrings.formatOnSaveDescription,
    SettingStrings.telemetry,
    SettingStrings.telemetryDescription,
    SettingStrings.autoUpdates,
    SettingStrings.autoUpdatesDescription,
    SettingStrings.fileEncryption,
    SettingStrings.fileEncryptionDescription,
    SettingStrings.twoFactorAuth,
    SettingStrings.twoFactorAuthDescription,
    SettingStrings.autoUpdateExtensions,
    SettingStrings.autoUpdateExtensionsDescription,
    SettingStrings.extensionRecommendations,
    SettingStrings.extensionRecommendationsDescription,
    SettingStrings.addWatchExpression,
    SettingStrings.refreshWatchExpressions,
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
