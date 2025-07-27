import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const { get, set, wrapCommand, dispose, getKeys, getCommandIds, registerCommands, wrapGetter } = ViewletRegistry.create<SettingsState>()
