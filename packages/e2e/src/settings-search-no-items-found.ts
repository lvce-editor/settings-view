import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-no-items-found'

export const test: Test = async ({ Main, Locator, expect, Command }) => {
  // arrange
  await Main.openUri('settings://') // TODO add page object

  // act
  await Command.execute('Settings.handleInput', 'abcdefgh', 2) // TODO page object

  // assert
  const noResultsMessage = Locator('.SettingsNoResults')
  await expect(noResultsMessage).toBeVisible()
  await expect(noResultsMessage).toHaveText('No settings matching "abcdefgh" found')
}
