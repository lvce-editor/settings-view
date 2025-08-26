import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as GetRenderer from '../GetRenderer/GetRenderer.ts'

export const applyRender = (oldState: SettingsState, newState: SettingsState, diffResult: readonly number[]): readonly ViewletCommand[] => {
  const commands: ViewletCommand[] = []
  for (const item of diffResult) {
    const fn = GetRenderer.getRenderer(item)
    commands.push(fn(oldState, newState))
  }
  console.log({ commands })
  return commands
}
