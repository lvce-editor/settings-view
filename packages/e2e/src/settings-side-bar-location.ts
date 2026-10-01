import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.side-bar-location'

export const test: Test = async ({ Command, expect, Locator, Main, SettingsView }) => {
  await SettingsView.show()
  await SettingsView.handleInput('side bar location')

  const sideBarLocation = Locator('select[name="workbench.sideBarLocation"]')
  const options = sideBarLocation.locator('option')
  await expect(sideBarLocation).toBeVisible()
  await expect(options).toHaveCount(2)
  const leftOption = options.nth(0)
  const rightOption = options.nth(1)
  await expect(leftOption).toHaveText('Left')
  await expect(rightOption).toHaveText('Right')
  await expect(sideBarLocation).toHaveValue('right')
  if ((await Command.execute('Layout.getSideBarPosition')) !== 2) {
    throw new Error('The side bar must be on the right initially')
  }

  await Command.execute('Settings.handleSettingSelect', 'workbench.sideBarLocation', 'left')
  await expect(sideBarLocation).toHaveValue('left')
  if ((await Command.execute('Layout.getSideBarPosition')) !== 1) {
    throw new Error('Selecting left must move the side bar immediately')
  }
  if ((await Command.execute('Preferences.get', 'workbench.sideBarLocation')) !== 'left') {
    throw new Error('Selecting left must persist the sidebar location')
  }

  await Command.execute('Settings.handleSettingSelect', 'workbench.sideBarLocation', 'right')
  await expect(sideBarLocation).toHaveValue('right')
  if ((await Command.execute('Layout.getSideBarPosition')) !== 2) {
    throw new Error('Selecting right must move the side bar immediately')
  }
  await Command.execute('Settings.handleSettingSelect', 'workbench.sideBarLocation', 'left')
  if ((await Command.execute('Layout.getSideBarPosition')) !== 1) {
    throw new Error('Repeated side bar selections must keep the layout in sync')
  }
  await Command.execute('Layout.hideSideBar')
  await Command.execute('Settings.handleSettingSelect', 'workbench.sideBarLocation', 'right')
  if ((await Command.execute('Layout.getSideBarPosition')) !== 2) {
    throw new Error('Changing the side bar location while hidden must update the layout')
  }
  if (await Command.execute('Layout.getSideBarVisible')) {
    throw new Error('Changing the side bar location must preserve its hidden state')
  }
  await Command.execute('Layout.showSideBar')
  await Command.execute('Settings.handleSettingSelect', 'workbench.sideBarLocation', 'left')
  if ((await Command.execute('Layout.getSideBarPosition')) !== 1) {
    throw new Error('Showing the side bar after moving it must keep its location')
  }

  await Main.closeActiveEditor()
  await SettingsView.show()
  await SettingsView.handleInput('side bar location')
  await expect(sideBarLocation).toHaveValue('left')
}
