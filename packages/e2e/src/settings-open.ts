import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.open'

export const skip = 1

export const test: Test = async ({ expect, Locator, Main }) => {
  // arrange

  // act
  await Main.openUri('settings://') // TODO add page object

  // assert
  const settingsHeader = Locator('.SettingsHeader')
  await expect(settingsHeader).toBeVisible()
  const settingsMain = Locator('.SettingsMain')
  await expect(settingsMain).toBeVisible()
  const clearButton = Locator('.Button[name="Clear"]')
  await expect(clearButton).toBeVisible()
  await expect(clearButton).toHaveAttribute('disabled', '')
}
