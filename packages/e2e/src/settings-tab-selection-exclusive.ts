import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.tab-selection-exclusive'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.selectTab('applications')

  await SettingsView.selectTab('workbench')

  const applicationsTab = Locator('.Tab[name="applications"]')
  await expect(applicationsTab).toHaveAttribute('aria-selected', 'false')
  const workbenchTab = Locator('.Tab[name="workbench"]')
  await expect(workbenchTab).toHaveAttribute('aria-selected', 'true')
}
