import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-workbench'

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act
  await SettingsView.selectTab('workbench')

  // assert
  const tab = Locator('.Tab[name="workbench"]')
  await expect(tab).toHaveAttribute('aria-selected', 'true')
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Workbench')
  const themeSetting = Locator('[name="theme"]')
  await expect(themeSetting).toBeVisible()
}
