import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.clear-button-enabled-after-search'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.handleInput('font size')

  const clearButton = Locator('.SearchFieldButton[name="Clear"]')
  await expect(clearButton).toHaveAttribute('disabled', null)
}
