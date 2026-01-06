import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.restore-scroll-position'

export const skip = 1

export const test: Test = async ({ expect, Locator, Main, SettingsView }) => {
  // arrange
  await SettingsView.show()
  await SettingsView.handleScroll(20)
  await Main.closeAllEditors()

  // act
  await SettingsView.show()

  // assert
  const settingsContent = Locator('.SettingsContent')
  await expect(settingsContent).toHaveJSProperty('scrollTop', 20)
}
