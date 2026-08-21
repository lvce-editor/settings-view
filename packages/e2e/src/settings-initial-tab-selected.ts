import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.initial-tab-selected'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  const textEditorTab = Locator('.Tab[name="text-editor"]')
  await expect(textEditorTab).toHaveAttribute('aria-selected', 'true')
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Text Editor')
}
