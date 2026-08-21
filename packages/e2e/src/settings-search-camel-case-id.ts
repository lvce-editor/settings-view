import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-camel-case-id'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.handleInput('scroll beyond last line')

  const settingsItems = Locator('.SettingsItem')
  await expect(settingsItems).toHaveCount(1)
  const setting = Locator('[name="editor.scrollBeyondLastLine"]')
  await expect(setting).toBeVisible()
}
