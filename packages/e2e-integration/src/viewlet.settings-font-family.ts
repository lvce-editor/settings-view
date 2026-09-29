import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-font-family'

export const test: Test = async ({ expect, Locator, Main, Settings, SettingsView }) => {
  await Settings.update({ 'editor.fontFamily': '' })
  await SettingsView.show()
  await SettingsView.handleInput('font family')

  const fontFamily = Locator('input[name="editor.fontFamily"]')
  await expect(fontFamily).toBeVisible()
  await fontFamily.click()
  await fontFamily.type('serif')

  await expect(fontFamily).toHaveValue('serif')
  await Main.closeActiveEditor()
  await SettingsView.show()
  await SettingsView.handleInput('font family')
  await expect(fontFamily).toHaveValue('serif')
}
