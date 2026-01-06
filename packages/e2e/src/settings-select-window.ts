import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-window'

export const test: Test = async ({ Command, expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await Command.execute('Settings.handleClickTab', 'window')

  // assert
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Window')
}
