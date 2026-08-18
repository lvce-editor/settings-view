import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.item-context-menu-reset'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ Command, ContextMenu, expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.handleInput('font size')
  await Command.execute('Settings.handleSettingInput', 'editor.fontSize', '20')

  await Command.execute('Settings.handleContextMenu', 'editor.fontSize', 400, 300)

  const menuItems = Locator('.MenuItem')
  await expect(menuItems).toHaveCount(1)
  const resetSettingItem = menuItems.nth(0)
  await expect(resetSettingItem).toHaveText('Reset Setting')
  await ContextMenu.selectItem('Reset Setting')
  const fontSizeInput = Locator('[name="editor.fontSize"]')
  await expect(fontSizeInput).toHaveValue('15')
}
