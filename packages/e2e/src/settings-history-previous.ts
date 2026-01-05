import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.history-previous'

export const skip = 1

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('settings://') // TODO add page object
  await Command.execute('Settings.clearHistory')
  await Command.execute('Settings.handleInput', 'font family', 2) // TODO page object
  await Command.execute('Settings.handleInput', 'font size', 2) // TODO page object

  // act
  await Command.execute('Settings.usePreviousSearchValue') // TODO page object

  // assert
  const input = Locator('.SettingsSearchInput')
  await expect(input).toHaveValue('font family')
  await expect(input).toBeFocused()
  const wordWrapSetting = Locator('[name="Editor.wordWrap"]')
  await expect(wordWrapSetting).toBeVisible()
}
