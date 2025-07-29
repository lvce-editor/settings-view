import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search'

export const test: Test = async ({ Main, Locator, expect, Command }) => {
  // arrange
  await Main.openUri('settings://') // TODO add page object

  // act
  await Command.execute('Settings.handleInput', 'font family', 2) // TODO page object

  // assert
  const settingsItems = Locator('.SettingsItem')
  await expect(settingsItems).toHaveCount(1)
  const heading = settingsItems.locator('h3')
  await expect(heading).toHaveText('Font Family')
  const description = settingsItems.locator('p')
  await expect(description).toHaveText('The font family of the editor')
  const input = settingsItems.locator('.InputBox')
  await expect(input).toHaveValue('Fira Code')
  const badge = Locator('.SettingsHeader .Badge')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveText('1 matching settings') // TODO should be 1 matching setting
}
