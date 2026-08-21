import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.window-title-value'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.selectWindow()

  const windowTitle = Locator('input[name="windowTitle"]')
  await expect(windowTitle).toBeVisible()
  await expect(windowTitle).toHaveValue('Settings View')
}
