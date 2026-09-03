import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.unselect-category'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.selectTab('applications')

  const applicationsTab = Locator('.Tab[name="applications"]')
  await expect(applicationsTab).toHaveAttribute('aria-selected', 'true')

  const sideBar = Locator('.SettingsSideBar')
  await sideBar.dispatchEvent('click', { bubbles: true } as unknown as string)

  await expect(applicationsTab).toHaveAttribute('aria-selected', 'false')
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Settings')
  const fontSize = Locator('[name="editor.fontSize"]')
  await expect(fontSize).toBeVisible()
}
