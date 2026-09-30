import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-item'

export const test: Test = async ({ Command, expect, Locator, Main, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.handleInput('word wrap')

  const wordWrap = Locator('select[name="editor.wordWrap"]')
  await expect(wordWrap).toBeVisible()
  const options = wordWrap.locator('option')
  await expect(options).toHaveCount(2)
  const onOption = options.nth(0)
  await expect(onOption).toHaveText('On')
  const offOption = options.nth(1)
  await expect(offOption).toHaveText('off')

  await SettingsView.selectTab('workbench')

  const colorTheme = Locator('select[name="workbench.colorTheme"]')
  await expect(colorTheme).toBeVisible()
  const colorThemeOptions = colorTheme.locator('option')
  await expect(colorThemeOptions).not.toHaveCount(0)

  await Command.execute('Settings.handleSettingSelect', 'workbench.colorTheme', 'cobalt2')
  await expect(colorTheme).toHaveValue('cobalt2')
  if ((await Command.execute('Preferences.get', 'workbench.colorTheme')) !== 'cobalt2') {
    throw new Error('Selecting a color theme must persist the canonical preference')
  }

  await Main.closeActiveEditor()
  await SettingsView.show()
  await SettingsView.selectTab('workbench')
  const reopenedColorTheme = Locator('select[name="workbench.colorTheme"]')
  await expect(reopenedColorTheme).toHaveValue('cobalt2')
}
