import { terminate } from '@lvce-editor/viewlet-registry'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import { wrapCommand } from '../SettingsStates/SettingsStates.ts'

export const commandMap = {
  'Initialize.initialize': Initialize.initialize,
  'Settings.create': Create.create,
  'Settings.terminate': terminate,
  'Settings.diff2': Diff2.diff2,
  'Settings.loadContent': wrapCommand(LoadContent.loadContent),
}
