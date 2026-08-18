import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.filter-menu-open'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ ContextMenu, expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.handleClickFilterButton(700, 100)

  // assert
  const contextMenu = Locator('.Menu')
  await expect(contextMenu).toBeVisible()
  const menuItems = contextMenu.locator('.MenuItem')
  await expect(menuItems).toHaveCount(10)

  // act
  await ContextMenu.selectItem('Modified')

  // assert
  const input = Locator('.SettingsSearchInput')
  await expect(input).toHaveValue('@modified')
  await expect(input).toBeFocused()
}
