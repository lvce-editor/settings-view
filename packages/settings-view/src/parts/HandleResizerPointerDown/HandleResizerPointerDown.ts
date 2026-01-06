import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const handleResizerPointerDown = (state: SettingsState, eventX: number, eventY: number): SettingsState => {
  console.log('down', eventX, eventY)
  return state
}
