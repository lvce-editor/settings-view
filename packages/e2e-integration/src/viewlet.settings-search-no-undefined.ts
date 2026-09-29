import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-search-no-undefined'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.handleInput('editor.font')

  const settingsContent = Locator('.SettingsContent')
  await expect(Locator('.SettingsItem')).toHaveCount(4)
  await expect(settingsContent.locator('text=undefined')).toHaveCount(0)
  await expect(Locator('.ScrollBar')).toBeHidden()
}
