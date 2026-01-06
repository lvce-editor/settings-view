import { EventExpression } from '@lvce-editor/constants'
import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleClickTab,
      params: ['handleClickTab', EventExpression.TargetName],
    },
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['handleInput', EventExpression.TargetValue],
    },
    {
      name: DomEventListenerFunctions.HandleClickClear,
      params: ['clear'],
    },
    {
      name: DomEventListenerFunctions.HandleSettingInput,
      params: ['handleSettingInput', EventExpression.TargetName, EventExpression.TargetValue],
    },
    {
      name: DomEventListenerFunctions.HandleSettingChecked,
      params: ['handleSettingChecked', EventExpression.TargetName, EventExpression.TargetValue],
    },
    // {
    //   name: DomEventListenerFunctions.HandleScroll,
    //   params: ['handleScroll', 'event.target.scrollTop'],
    //   passive: true,
    // },
    {
      name: DomEventListenerFunctions.HandleWheel,
      params: ['handleWheel', EventExpression.DeltaY],
      passive: true,
    },
    {
      name: DomEventListenerFunctions.HandleSettingSelect,
      params: ['handleSettingSelect', EventExpression.TargetName, EventExpression.TargetValue],
    },
    {
      name: DomEventListenerFunctions.HandleInputFocus,
      params: ['handleInputFocus'],
    },
    {
      name: DomEventListenerFunctions.HandleResizerPointerDown,
      params: ['handleResizerPointerDown', EventExpression.ClientX, EventExpression.ClientY],
    },
  ]
}
