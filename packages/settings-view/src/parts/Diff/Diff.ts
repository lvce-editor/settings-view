import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as DiffModules from '../DiffModules/DiffModules.ts'
import { RenderScrollOffset } from '../DiffType/DiffType.ts'

export const diff = (oldState: SettingsState, newState: SettingsState): readonly number[] => {
  const diffResult: number[] = []
  for (let i = 0; i < DiffModules.modules.length; i++) {
    const fn = DiffModules.modules[i]

    // TODO enable this
    if (DiffModules.numbers[i] === RenderScrollOffset) {
      continue
    }
    if (!fn(oldState, newState)) {
      diffResult.push(DiffModules.numbers[i])
    }
  }
  return diffResult
}
