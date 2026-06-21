import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.virtual-sections-smoke'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await expect(Locator('.Section-1')).toHaveCount(1)

  await SettingsView.handleScroll(800)

  await expect(Locator('.Section-1')).toHaveCount(0)

  await SettingsView.handleInput('font family')
  await expect(Locator('.Section-1')).toHaveJSProperty('offsetHeight', 75)
}
