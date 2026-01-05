import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.restore-scroll-position'

export const skip = 1

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('settings://') // TODO add page object
  await Command.execute('Settings.handleScroll', 20, 2)
  await Main.closeAllEditors()

  // act
  await Main.openUri('settings://') // TODO add page object

  // assert
  const settingsContent = Locator('.SettingsContent')
  await expect(settingsContent).toHaveJSProperty('scrollTop', 20)
}
