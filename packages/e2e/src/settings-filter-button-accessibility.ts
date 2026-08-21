import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.filter-button-accessibility'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  const filterButton = Locator('.SearchFieldButton[name="Filter"]')
  await expect(filterButton).toHaveAttribute('aria-label', 'Filter')
  await expect(filterButton).toHaveAttribute('aria-haspopup', 'true')
}
