import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-security'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.selectTab('security')

  // assert
  const tab = Locator('.SettingsTab[name="security"]')
  await expect(tab).toHaveAttribute('aria-selected', 'true')
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Security')
  const encryptionSetting = Locator('[name="encryption"]')
  await expect(encryptionSetting).toBeVisible()
}
