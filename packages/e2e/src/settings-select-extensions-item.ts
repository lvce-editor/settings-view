import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-extensions-item'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.selectExtensions()

  const tab = Locator('.Tab[name="extensions"]')
  await expect(tab).toHaveAttribute('aria-selected', 'true')
  const autoUpdate = Locator('[name="extensionsAutoUpdate"]')
  await expect(autoUpdate).toBeVisible()
}
