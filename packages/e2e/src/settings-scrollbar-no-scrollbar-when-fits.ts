import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.scrollbar-no-scrollbar-when-fits'

export const skip = 1

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.handleInput('suggest font size')

  // assert
  const settingsItems = Locator('.SettingsItem')
  await expect(settingsItems).toHaveCount(1)
  const scrollBar = Locator('.ScrollBar')
  await expect(scrollBar).not.toBeVisible()
}
