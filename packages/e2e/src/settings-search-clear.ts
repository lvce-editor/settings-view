import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-clear'

export const test: Test = async ({ Main, Locator, expect, Command }) => {
  // arrange
  await Main.openUri('settings://') // TODO add page object
  await Command.execute('Settings.handleInput', 'font family', 2) // TODO page object

  // act
  await Command.execute('Settings.clear', '')

  // assert
  const input = Locator('.SettingsSearchInput')
  await expect(input).toHaveValue('')
  await expect(input).toBeFocused()
  const wordWrapSetting = Locator('[name="editor.wordWrap"]')
  await expect(wordWrapSetting).toBeVisible()
}
