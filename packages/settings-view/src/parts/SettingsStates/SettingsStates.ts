import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const { get, set, wrapCommand, getCommandIds, registerCommands, wrapGetter } = ViewletRegistry.create<SettingsState>()
