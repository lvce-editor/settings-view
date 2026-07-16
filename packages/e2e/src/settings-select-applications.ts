import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-applications'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.selectTab('applications')

  // assert
  const tab = Locator('.SettingsTab[name="applications"]')
  await expect(tab).toHaveAttribute('aria-selected', 'true')
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Applications')
  const telemetrySetting = Locator('[name="telemetry"]')
  await expect(telemetrySetting).toBeVisible()
}
