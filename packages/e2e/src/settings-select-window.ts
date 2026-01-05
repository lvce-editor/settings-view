import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-window'

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('settings://') // TODO add page object

  // act
  await Command.execute('Settings.handleClickTab', 'window')

  // assert
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Window')
}
