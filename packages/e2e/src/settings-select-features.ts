import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-features'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.selectTab('features')

  // assert
  const tab = Locator('.SettingsTab[name="features"]')
  await expect(tab).toHaveAttribute('aria-selected', 'true')
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Features')
  const autoSaveSetting = Locator('[name="autoSave"]')
  await expect(autoSaveSetting).toBeVisible()
}
