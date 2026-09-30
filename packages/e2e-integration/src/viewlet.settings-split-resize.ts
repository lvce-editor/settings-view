import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-split-resize'

export const test: Test = async ({ Command, expect, Locator, Main, SettingsView }) => {
  await SettingsView.show()
  const settings = Locator('.Settings')
  await expect(settings).toBeVisible()

  await Main.splitRight()

  const state = (await Command.execute('Settings.getComponentState')) as { width: number }
  await expect(settings).toHaveCSS('width', `${state.width}px`)
}
