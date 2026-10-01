import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-color-and-boolean-sibling-rows'

export const test: Test = async ({ expect, Locator, Settings, SettingsView }) => {
  await Settings.update({
    'editor.showUnused': false,
    'settings.useToggles': true,
  })
  await SettingsView.show()
  await SettingsView.selectTab('text-editor')

  const colorRow = Locator('.SettingsItem:has(h3:text-is("Editor background"))')
  const booleanRow = Locator('.SettingsItem:has(h3:text-is("Show Unused"))')
  const colorInput = colorRow.locator('input[type="color"]')
  const booleanInput = booleanRow.locator('input[type="checkbox"]')

  await colorRow.scrollIntoViewIfNeeded()
  await booleanRow.scrollIntoViewIfNeeded()
  await expect(colorRow).toBeVisible()
  await expect(booleanRow).toBeVisible()
  await expect(colorInput).toBeVisible()
  await expect(booleanInput).toBeVisible()
  await expect(colorRow.locator('..')).toHaveClass('SettingsItems')
  await expect(booleanRow.locator('..')).toHaveClass('SettingsItems')

  await colorInput.fill('#123456')
  await booleanInput.check()
  await expect(booleanInput).toBeChecked()
}
