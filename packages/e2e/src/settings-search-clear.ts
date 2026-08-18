import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-clear'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()
  await SettingsView.handleInput('font family')

  // act
  await SettingsView.clear('')

  // assert
  const input = Locator('.SettingsSearchInput')
  await expect(input).toHaveValue('')
  await expect(input).toBeFocused()
  const wordWrapSetting = Locator('[name="editor.wordWrap"]')
  await expect(wordWrapSetting).toBeVisible()
}
