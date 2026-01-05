import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.history-previous'

export const skip = 1

export const test: Test = async ({ Command, expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()
  await Command.execute('Settings.clearHistory')
  await SettingsView.handleInput('font family', 2)
  await SettingsView.handleInput('font size', 2)

  // act
  await Command.execute('Settings.usePreviousSearchValue') // TODO page object

  // assert
  const input = Locator('.SettingsSearchInput')
  await expect(input).toHaveValue('font family')
  await expect(input).toBeFocused()
  const wordWrapSetting = Locator('[name="Editor.wordWrap"]')
  await expect(wordWrapSetting).toBeVisible()
}
