import { terminate } from '@lvce-editor/viewlet-registry'
import * as Create from '../Create/Create.ts'
import * as Initialize from '../Initialize/Initialize.ts'

export const commandMap = {
  'Initialize.initialize': Initialize.initialize,
  'Settings.create': Create.create,
  'Settings.terminate': terminate,
}
