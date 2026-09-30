import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.select-item'

export const skip = 1 // Requires the settings-worker renderer integration.

export const test: Test = async ({ expect, Locator, SettingsView }) => {
  await SettingsView.show()

  await SettingsView.handleInput('word wrap')

  const wordWrap = Locator('select[name="editor.wordWrap"]')
  await expect(wordWrap).toBeVisible()
  const options = wordWrap.locator('option')
  await expect(options).toHaveCount(2)
  const onOption = options.nth(0)
  await expect(onOption).toHaveText('On')
  const offOption = options.nth(1)
  await expect(offOption).toHaveText('off')
}
