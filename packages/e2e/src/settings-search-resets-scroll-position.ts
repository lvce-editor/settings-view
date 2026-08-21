import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.search-resets-scroll-position'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.handleScroll(100)

  await SettingsView.handleInput('font')

  const settingsContent = Locator('.SettingsContent')
  await expect(settingsContent).toHaveJSProperty('scrollTop', 0)
}
