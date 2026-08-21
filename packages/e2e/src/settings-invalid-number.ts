import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.invalid-number'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ Command, expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.handleInput('font size')

  await Command.execute('Settings.handleSettingInput', 'editor.fontSize', '5')

  const setting = Locator('.SettingsItem[name="editor.fontSize"]')
  const input = setting.locator('input[name="editor.fontSize"]')
  await expect(input).toHaveClass('InputBox InputBoxError')
  const errorMessage = setting.locator('.ErrorMessage')
  await expect(errorMessage).toHaveText('font size must be at least 10')
}
