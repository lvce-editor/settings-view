import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as SettingsStates from '../SettingsStates/SettingsStates.ts'

const applyComponentState = (currentState: SettingsState, state: SettingsState): SettingsState => {
  if (!state || typeof state !== 'object' || Array.isArray(state)) {
    throw new TypeError('Settings state must be an object')
  }
  const { id } = state
  const { id: currentId } = currentState
  if (id !== currentId) {
    throw new Error(`Settings state id must remain ${currentId}`)
  }
  return state
}

export const setComponentState = SettingsStates.wrapCommand(applyComponentState)
