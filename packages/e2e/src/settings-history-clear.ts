import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.history-clear'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.handleInput('font family')
  await SettingsView.clearHistory()

  await SettingsView.usePreviousSearchValue()

  const input = Locator('.SettingsSearchInput')
  await expect(input).toHaveValue('font family')
}
