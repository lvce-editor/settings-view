import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-split-resize'

export const test: Test = async ({ Command, expect, Locator, Main, SettingsView }) => {
  await SettingsView.show()
  const settings = Locator('.Settings')
  await expect(settings).toBeVisible()
  await SettingsView.selectTextEditor()
  const heading = Locator('.SettingsContentHeading')
  await expect(heading).toHaveText('Text Editor')

  await Main.splitRight()

  await expect(settings).toBeVisible()
  await expect(heading).toHaveText('Text Editor')

  const components = (await Command.execute('ComponentState.getComponents')) as Array<{ displayName: string; uid: number }>
  const settingsComponent = components.find(({ displayName }) => displayName === 'Settings')
  if (!settingsComponent) throw new Error('Settings component state not found')
  const state = (await Command.execute('ComponentState.getState', settingsComponent.uid)) as { width: number }
  await expect(settings).toHaveCSS('width', `${state.width}px`)
}
