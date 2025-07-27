import { terminate } from '@lvce-editor/viewlet-registry'
import { clear } from '../Clear/Clear.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import { handleClickTab } from '../HandleClickTab/HandleClickTab.ts'
import { handleInput } from '../HandleInput/HandleInput.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import { render2 } from '../Render2/Render2.ts'
import { renderActions } from '../RenderActions/RenderActions.ts'
import { renderEventListeners } from '../RenderEventListeners/RenderEventListeners.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'
import { saveState } from '../SaveState/SaveState.ts'
import { getCommandIds, wrapCommand } from '../SettingsStates/SettingsStates.ts'

export const commandMap = {
  'Initialize.initialize': Initialize.initialize,
  'Settings.create': Create.create,
  'Settings.diff2': Diff2.diff2,
  'Settings.getCommandIds': getCommandIds,
  'Settings.loadContent': wrapCommand(LoadContent.loadContent),
  'Settings.render2': render2,
  'Settings.renderActions': renderActions,
  'Settings.renderEventListeners': renderEventListeners,
  'Settings.restoreState': restoreState,
  'Settings.saveState': wrapCommand(saveState),
  'Settings.terminate': terminate,
  'Settings.handleClickTab': wrapCommand(handleClickTab),
  'Settings.clear': wrapCommand(clear),
  'Settings.handleInput': wrapCommand(handleInput),
}
