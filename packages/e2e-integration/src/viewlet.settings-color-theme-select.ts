import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-color-theme-select'

export const test: Test = async ({ Command, expect, Locator, Main, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.selectTab('workbench')

  const colorTheme = Locator('select[name="workbench.colorTheme"]')
  await expect(colorTheme).toBeVisible()
  await expect(colorTheme.locator('option')).not.toHaveCount(0)

  await Command.execute('Settings.handleSettingSelect', 'workbench.colorTheme', 'cobalt2')
  await expect(colorTheme).toHaveValue('cobalt2')
  if ((await Command.execute('Preferences.get', 'workbench.colorTheme')) !== 'cobalt2') {
    throw new Error('Selecting a color theme must persist the canonical preference')
  }

  await Main.closeActiveEditor()
  await SettingsView.show()
  await SettingsView.selectTab('workbench')
  await expect(Locator('select[name="workbench.colorTheme"]')).toHaveValue('cobalt2')
}
