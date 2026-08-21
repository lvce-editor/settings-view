import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.history-next'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.clearHistory()
  await SettingsView.handleInput('font family')
  await SettingsView.handleInput('font size')
  await SettingsView.usePreviousSearchValue()

  await SettingsView.useNextSearchValue()

  const input = Locator('.SettingsSearchInput')
  await expect(input).toHaveValue('font size')
  const fontSize = Locator('[name="editor.fontSize"]')
  await expect(fontSize).toBeVisible()
}
