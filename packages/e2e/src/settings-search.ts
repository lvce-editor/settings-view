import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search'

export const test: Test = async ({ expect, Locator, Main, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.handleInput('font family', 2)

  // assert
  const settingsItems = Locator('.SettingsItem')
  await expect(settingsItems).toHaveCount(1)
  const heading = settingsItems.locator('h3')
  await expect(heading).toHaveText('Font Family')
  const description = settingsItems.locator('.Label')
  await expect(description).toHaveText('The font family of the editor')
  const input = settingsItems.locator('.InputBox')
  await expect(input).toHaveValue("'Fira Code'")
  const badge = Locator('.SettingsHeader .Badge')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveText('1 matching settings') // TODO should be 1 matching setting
}
