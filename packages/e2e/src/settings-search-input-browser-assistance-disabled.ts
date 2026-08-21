import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-input-browser-assistance-disabled'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  const input = Locator('.SettingsSearchInput')
  await expect(input).toHaveAttribute('autocomplete', 'off')
  await expect(input).toHaveAttribute('autocapitalize', 'off')
  await expect(input).toHaveAttribute('autocorrect', 'off')
  await expect(input).toHaveAttribute('spellcheck', 'false')
}
