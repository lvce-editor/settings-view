import { terminate } from '@lvce-editor/viewlet-registry'
import { clear } from '../Clear/Clear.ts'
import { clearHistory } from '../ClearHistory/ClearHistory.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import { getKeyBindings } from '../GetKeyBindings/GetKeyBindings.ts'
import { getName } from '../GetName/GetName.ts'
import { handleClickTab } from '../HandleClickTab/HandleClickTab.ts'
import { handleInput } from '../HandleInput/HandleInput.ts'
import { handleInputBlur } from '../HandleInputBlur/HandleInputBlur.ts'
import { handleInputFocus } from '../HandleInputFocus/HandleInputFocus.ts'
import { handleScroll } from '../HandleScroll/HandleScroll.ts'
import { handleSettingChecked } from '../HandleSettingChecked/HandleSettingChecked.ts'
import { handleSettingInput } from '../HandleSettingInput/HandleSettingInput.ts'
import { handleSettingSelect } from '../HandleSettingSelect/HandleSettingSelect.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import { render2 } from '../Render2/Render2.ts'
import { renderActions } from '../RenderActions/RenderActions.ts'
import { renderEventListeners } from '../RenderEventListeners/RenderEventListeners.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'
import { saveState } from '../SaveState/SaveState.ts'
import { getCommandIds, wrapCommand, wrapGetter } from '../SettingsStates/SettingsStates.ts'
import { useNextSearchValue } from '../UseNextSearchValue/UseNextSearchValue.ts'
import { usePreviousSearchValue } from '../UsePreviousSearchValue/UsePreviousSearchValue.ts'

export const commandMap = {
  'Initialize.initialize': Initialize.initialize,
  'Settings.clear': wrapCommand(clear),
  'Settings.clearHistory': wrapCommand(clearHistory),
  'Settings.create': Create.create,
  'Settings.diff2': Diff2.diff2,
  'Settings.getName': getName,
  'Settings.getCommandIds': getCommandIds,
  'Settings.handleClickTab': wrapCommand(handleClickTab),
  'Settings.handleInputBlur': wrapCommand(handleInputBlur),
  'Settings.handleInput': wrapCommand(handleInput),
  'Settings.handleScroll': wrapCommand(handleScroll),
  'Settings.handleSettingChecked': wrapCommand(handleSettingChecked),
  'Settings.handleSettingInput': wrapCommand(handleSettingInput),
  'Settings.handleInputFocus': wrapCommand(handleInputFocus),
  'Settings.handleSettingSelect': wrapCommand(handleSettingSelect),
  'Settings.loadContent': wrapCommand(LoadContent.loadContent),
  'Settings.render2': render2,
  'Settings.renderActions': renderActions,
  'Settings.renderEventListeners': renderEventListeners,
  'Settings.restoreState': restoreState,
  'Settings.saveState': wrapGetter(saveState),
  'Settings.terminate': terminate,
  'Settings.useNextSearchValue': wrapCommand(useNextSearchValue),
  'Settings.usePreviousSearchValue': wrapCommand(usePreviousSearchValue),
  'Settings.getKeyBindings': getKeyBindings,
}
