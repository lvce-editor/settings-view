import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-extensions'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.selectExtensions()

  // assert
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Extensions')
}
