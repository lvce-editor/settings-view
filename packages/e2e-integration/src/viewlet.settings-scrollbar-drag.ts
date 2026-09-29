import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-scrollbar-drag'

export const test: Test = async ({ SettingsView }) => {
  await SettingsView.show()
}
