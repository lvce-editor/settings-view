import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.restore-scroll-position'

export const skip = 1

export const test: Test = async ({ Command, expect, Locator, Main, SettingsView }) => {
  // arrange
  await SettingsView.show()
  await Command.execute('Settings.handleScroll', 20, 2)
  await Main.closeAllEditors()

  // act
  await SettingsView.show()

  // assert
  const settingsContent = Locator('.SettingsContent')
  await expect(settingsContent).toHaveJSProperty('scrollTop', 20)
}
