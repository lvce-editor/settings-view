import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.open'

export const test: Test = async ({ Main, Locator, expect }) => {
  // arrange

  // act
  await Main.openUri('settings://') // TODO add page object

  // assert
  const settingsHeader = Locator('.SettingsHeader')
  await expect(settingsHeader).toBeVisible()
  const settingsMain = Locator('.SettingsMain')
  await expect(settingsMain).toBeVisible()
}
