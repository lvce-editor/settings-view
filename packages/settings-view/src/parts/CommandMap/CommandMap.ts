import { terminate } from '@lvce-editor/viewlet-registry'
import * as Initialize from '../Initialize/Initialize.ts'

export const commandMap = {
  'Initialize.initialize': Initialize.initialize,
  'Settings.terminate': terminate,
}
