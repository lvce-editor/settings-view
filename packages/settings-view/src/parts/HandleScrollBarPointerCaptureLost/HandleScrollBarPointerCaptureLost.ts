import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleScrollBarPointerCaptureLost = (state: SettingsState): SettingsState => {
  {
    const { height, scrollBarActive, scrollBarHandleOffset, scrollBarThumbTop, x, y } = state
    console.warn(
      '[DEBUG-settings-drag] HandleScrollBarPointerCaptureLost',
      JSON.stringify({ height, scrollBarActive, scrollBarHandleOffset, scrollBarThumbTop, x, y }),
    )
  }
  return {
    ...state,
    scrollBarActive: false,
    scrollBarHandleOffset: undefined,
  }
}
