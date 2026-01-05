import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-no-items-found'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.handleInput('abcdefgh')

  // assert
  const noResultsMessage = Locator('.SettingsNoResults')
  await expect(noResultsMessage).toBeVisible()
  await expect(noResultsMessage).toHaveText('No settings matching "abcdefgh" found')
}
