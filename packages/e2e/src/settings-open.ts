import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.open'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange

  // act
  await SettingsView.show()

  // assert
  const settingsHeader = Locator('.SettingsHeader')
  await expect(settingsHeader).toBeVisible()
  const settingsMain = Locator('.SettingsMain')
  await expect(settingsMain).toBeVisible()
  const clearButton = Locator('.SearchFieldButton[name="Clear"]')
  await expect(clearButton).toBeVisible()
  await expect(clearButton).toHaveAttribute('disabled', '')
}
