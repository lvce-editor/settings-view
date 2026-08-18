import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-text-editor'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.selectTextEditor()

  // assert
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Text Editor')
}
