import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as SettingsStates from '../SettingsStates/SettingsStates.ts'

export const render2 = (uid: number, diffResult: readonly number[]): readonly ViewletCommand[] => {
  const { newState, oldState } = SettingsStates.get(uid)
  SettingsStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
