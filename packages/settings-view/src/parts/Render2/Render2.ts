import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'
import * as SettingsStates from '../SettingsStates/SettingsStates.ts'

export const render2 = (uid: number, diffResult: readonly number[]): readonly ViewletCommand[] | Promise<readonly ViewletCommand[]> => {
  const { newState, oldState } = SettingsStates.get(uid)
  SettingsStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  if (!RendererProcess.isConnected()) return commands
  return renderDirect(uid, commands)
}

const renderDirect = async (uid: number, commands: readonly ViewletCommand[]): Promise<readonly ViewletCommand[]> => {
  const rendererWorkerCommands = commands.filter((command) => command[0] === 'Viewlet.setFocusContext')
  const rendererProcessCommands = commands.filter((command) => command[0] !== 'Viewlet.setFocusContext')
  const transactionId = await RendererProcess.invoke('Viewlet.queueCommands', uid, rendererProcessCommands)
  return [...rendererWorkerCommands, ['Viewlet.commitPending', uid, transactionId]]
}
