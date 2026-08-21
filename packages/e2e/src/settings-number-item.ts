import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.number-item'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.handleInput('font size')

  const fontSize = Locator('input[name="editor.fontSize"]')
  await expect(fontSize).toBeVisible()
  await expect(fontSize).toHaveAttribute('type', 'number')
  await expect(fontSize).toHaveValue('15')
}
