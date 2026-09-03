import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.simple-browser-array'

export const skip = 1 // Requires LVCE built-in settings contributions.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.handleInput('simple browser')

  // assert
  const shortcutsSetting = Locator('.SettingsItem[name="simpleBrowser.shortcuts"]')
  await expect(shortcutsSetting).toBeVisible()
  await expect(shortcutsSetting.locator('h3')).toHaveText('Simple Browser Shortcuts')
  await expect(shortcutsSetting.locator('.InputBox')).toHaveValue('[]')
}
