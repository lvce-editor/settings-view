import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.modify-number'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ Command, expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.handleInput('font size')

  await Command.execute('Settings.handleSettingInput', 'editor.fontSize', '20')

  const setting = Locator('.SettingsItem[name="editor.fontSize"]')
  await expect(setting).toHaveAttribute('data-modified', 'true')
  const modifiedIndicator = setting.locator('.ModifiedIndicator')
  await expect(modifiedIndicator).toBeVisible()
  const input = setting.locator('input[name="editor.fontSize"]')
  await expect(input).toHaveValue('20')
}
