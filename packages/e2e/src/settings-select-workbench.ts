import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-text-editor'

export const test: Test = async ({ Main, Locator, expect, Command }) => {
  // arrange
  await Main.openUri('settings://') // TODO add page object

  // act
  await Command.execute('Settings.handleClickTab', 'text-editor')

  // assert
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Text Editor')
}
