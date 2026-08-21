import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-case-insensitive'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.handleInput('FONT FAMILY')

  const settingsItems = Locator('.SettingsItem')
  await expect(settingsItems).toHaveCount(1)
  const fontFamily = Locator('[name="editor.fontFamily"]')
  await expect(fontFamily).toBeVisible()
}
