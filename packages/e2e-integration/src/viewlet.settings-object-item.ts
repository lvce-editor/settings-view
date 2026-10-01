import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-object-item'

export const test: Test = async ({ expect, KeyBoard, Locator, Main, Settings, SettingsView }) => {
  await Settings.update({
    'git.remoteHosts': { 'github.com': 'https://github.com' },
    'keyBindings.fallTroughBrowserView': ['ctrl+p', 'ctrl+shift+p', 'ctrl+b', 'ctrl+m', 'ctrl+Tab'],
  })

  await SettingsView.show()
  await SettingsView.selectTab('workbench')
  await expect(Locator('.Tab[name="workbench"]')).toHaveAttribute('aria-selected', 'true')
  await SettingsView.handleInput('keyBindings.fallTroughBrowserView')
  await expect(Locator('.InputBadge')).toHaveText('1 matching settings')
  const keybindings = Locator('.SettingsItem')
  await expect(keybindings).toHaveCount(1)
  await expect(keybindings.locator('h3')).toHaveText('Browser View Keybindings')
  await expect(keybindings.locator('input')).toHaveValue('["ctrl+p","ctrl+shift+p","ctrl+b","ctrl+m","ctrl+Tab"]')

  await SettingsView.selectTab('')
  await SettingsView.handleInput('remote hosts')
  const remoteHosts = Locator('.SettingsItem')
  await expect(remoteHosts).toHaveCount(1)
  const input = remoteHosts.locator('input')
  await expect(remoteHosts.locator('h3')).toHaveText('Remote Hosts')
  await expect(input).toHaveValue('{"github.com":"https://github.com"}')

  await input.click()
  await KeyBoard.press('Control+A')
  await input.type('{"github.com":"https://example.com"}')
  await expect(input).toHaveValue('{"github.com":"https://example.com"}')
  await Main.closeActiveEditor()
  await SettingsView.show()
  await SettingsView.handleInput('remote hosts')
  await expect(input).toHaveValue('{"github.com":"https://example.com"}')

  await input.click()
  await KeyBoard.press('Control+A')
  await input.type('[]')
  await Main.closeActiveEditor()
  await SettingsView.show()
  await SettingsView.handleInput('remote hosts')
  await expect(input).toHaveValue('{"github.com":"https://example.com"}')

  await Settings.update({
    'git.remoteHosts': { 'github.com': 'https://github.com' },
    'keyBindings.fallTroughBrowserView': ['ctrl+p', 'ctrl+shift+p', 'ctrl+b', 'ctrl+m', 'ctrl+Tab'],
  })
}
