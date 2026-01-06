import * as Diff from '../Diff/Diff.ts'
import * as SettingsStates from '../SettingsStates/SettingsStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { newState, oldState } = SettingsStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
