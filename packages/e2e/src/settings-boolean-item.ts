import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.boolean-item'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.selectTab('features')

  const autoSave = Locator('input[name="autoSave"]')
  await expect(autoSave).toBeVisible()
  await expect(autoSave).toHaveAttribute('type', 'checkbox')
}
