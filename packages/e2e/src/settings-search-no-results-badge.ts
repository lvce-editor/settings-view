import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-no-results-badge'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.handleInput('no such setting')

  const badge = Locator('.SettingsHeader .InputBadge')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveText('0 matching settings')
}
