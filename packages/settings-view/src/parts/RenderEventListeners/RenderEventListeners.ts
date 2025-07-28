import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleClickTab,
      params: ['handleClickTab', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['handleInput', 'event.target.value'],
    },
    {
      name: DomEventListenerFunctions.HandleClickClear,
      params: ['clear'],
    },
    {
      name: DomEventListenerFunctions.HandleSettingInput,
      params: ['handleSettingInput', 'event.target.name', 'event.target.value'],
    },
    {
      name: DomEventListenerFunctions.HandleSettingChecked,
      params: ['handleSettingChecked', 'event.target.name', 'event.target.value'],
    },
    {
      name: DomEventListenerFunctions.HandleSettingSelect,
      params: ['handleSettingSelect', 'event.target.name', 'event.target.value'],
    },
  ]
}
