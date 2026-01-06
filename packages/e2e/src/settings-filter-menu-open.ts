import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.filter-menu-open'

export const skip = 1

export const test: Test = async ({ Command, expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await Command.execute('Settings.handleClickFilterButton')

  // assert
  const contextMenu = Locator('.Menu')
  await expect(contextMenu).toBeVisible()
}
