import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
    {
      command: 'Settings.usePreviousSearchValue',
      key: KeyCode.UpArrow,
      when: WhenExpression.FocusSettingsInput,
    },
    {
      command: 'Settings.useNextSearchValue',
      key: KeyCode.DownArrow,
      when: WhenExpression.FocusSettingsInput,
    },
  ]
}
