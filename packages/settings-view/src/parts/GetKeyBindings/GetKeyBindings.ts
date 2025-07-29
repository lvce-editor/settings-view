import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
    {
      key: KeyCode.UpArrow,
      command: 'Settings.usePreviousSearchValue',
      when: WhenExpression.FocusSettingsInput,
    },
    {
      key: KeyCode.DownArrow,
      command: 'Settings.useNextSearchValue',
      when: WhenExpression.FocusSettingsInput,
    },
  ]
}
