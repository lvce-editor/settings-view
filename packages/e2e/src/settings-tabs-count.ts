import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.tabs-count'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  const tabs = Locator('.SettingsTabs .Tab')
  await expect(tabs).toHaveCount(7)
}
