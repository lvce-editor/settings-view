import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.boolean-item'

export const test: Test = async ({ Command, expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.selectTab('workbench')

  const useTogglesSetting = Locator('.SettingsItem[name="settings.useToggles"]')
  const useToggles = useTogglesSetting.locator('input[name="settings.useToggles"]')
  await expect(useToggles).toBeVisible()
  await expect(useToggles).toHaveJSProperty('checked', true)

  await SettingsView.selectTab('features')

  const autoSave = Locator('input[name="autoSave"]')
  await expect(autoSave).toBeVisible()
  await expect(autoSave).toHaveAttribute('type', 'checkbox')
  await expect(autoSave).toHaveClass('Toggle')

  const autoSaveSetting = Locator('.SettingsItem[name="autoSave"]')
  const autoSaveLabel = autoSaveSetting.locator('label')
  await expect(autoSaveLabel).toHaveAttribute('for', 'autoSave')
  await Command.execute('Settings.handleSettingChecked', 'autoSave', false)
  await expect(autoSave).toHaveJSProperty('checked', false)

  await Command.execute('Settings.handleSettingChecked', 'autoSave', true)
  await expect(autoSave).toHaveJSProperty('checked', true)

  await SettingsView.selectTab('workbench')
  await Command.execute('Settings.handleSettingChecked', 'settings.useToggles', false)

  await SettingsView.selectTab('features')
  await expect(autoSave).toHaveClass('CheckBox')

  await SettingsView.selectTab('workbench')
  await Command.execute('Settings.handleSettingChecked', 'settings.useToggles', true)

  await SettingsView.selectTab('features')
  await expect(autoSave).toHaveClass('Toggle')
}
