import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-color-and-boolean-sibling-rows'

export const test: Test = async ({ Command, expect, Locator, Settings, SettingsView }) => {
  await Settings.update({
    'editor.showUnused': false,
    'settings.useToggles': true,
  })
  await SettingsView.show()
  await SettingsView.selectTab('text-editor')
  await SettingsView.handleScroll(18_500)

  await SettingsView.handleInput('editor.background')
  const colorRow = Locator('.SettingsItem:has(input[type="color"])')
  const colorInput = colorRow.locator('input[type="color"]')
  await expect(colorRow).toBeVisible()
  await expect(colorInput).toBeVisible()

  await Command.execute('Settings.handleSettingInput', 'editor.background', '#123456')
  await expect(colorInput).toHaveValue('#123456')

  await SettingsView.handleInput('editor.showUnused')
  const booleanRow = Locator('.SettingsItem:has(input[type="checkbox"])')
  const booleanInput = booleanRow.locator('input[type="checkbox"]')
  await expect(booleanRow).toBeVisible()
  await expect(booleanInput).toBeVisible()

  await booleanRow.locator('.Label').click()
  await expect(booleanInput).toHaveJSProperty('checked', true)
}
