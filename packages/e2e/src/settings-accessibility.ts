import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.accessibility'

export const skip = 1

export const test: Test = async ({ expect, Locator, Main }) => {
  // arrange

  // act
  await Main.openUri('settings://') // TODO add page object

  // assert
  const settingsInput = Locator('.SetingsSearchInput')
  await expect(settingsInput).toHaveAttribute('placeholder', 'Search Settings')
  // TODO should input it have type search? probably
  const settingsTabs = Locator('.SettingsTabs')
  await expect(settingsTabs).toHaveAttribute('role', 'tablist')
  const tabTextEditor = Locator('.SettingsTab[name="text-editor"]')
  await expect(tabTextEditor).toHaveAttribute('role', 'tab')

  // TODO test clear button accessibility
  // TODO test badge accesibility, it should have aria-live polite
}
