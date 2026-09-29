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
      name: DomEventListenerFunctions.HandleClickFilterButton,
      params: ['handleClickFilterButton', EventExpression.ClientX, EventExpression.ClientY],
    },
    {
      name: DomEventListenerFunctions.HandleContextMenu,
      params: ['handleContextMenu', EventExpression.TargetName, EventExpression.ClientX, EventExpression.ClientY],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleSettingInput,
      params: ['handleSettingInput', EventExpression.TargetName, EventExpression.TargetValue],
    },
    {
      name: DomEventListenerFunctions.HandleSettingChecked,
      params: ['handleSettingChecked', EventExpression.TargetName, EventExpression.TargetChecked],
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
      name: DomEventListenerFunctions.HandleScrollBarPointerDown,
      params: ['handleScrollBarPointerDown', EventExpression.ClientY],
      preventDefault: true,
      trackPointerEvents: [DomEventListenerFunctions.HandleScrollBarPointerMove, DomEventListenerFunctions.HandleScrollBarPointerCaptureLost],
    },
    {
      name: DomEventListenerFunctions.HandleScrollBarPointerMove,
      params: ['handleScrollBarPointerMove', EventExpression.ClientY],
    },
    {
      name: DomEventListenerFunctions.HandleScrollBarPointerCaptureLost,
      params: ['handleScrollBarPointerCaptureLost'],
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
      trackPointerEvents: [DomEventListenerFunctions.HandleResizerPointerMove, DomEventListenerFunctions.HandleResizerPointerUp],
    },
    {
      name: DomEventListenerFunctions.HandleResizerPointerMove,
      params: ['handleResizerPointerMove', EventExpression.ClientX, EventExpression.ClientY],
    },
    {
      name: DomEventListenerFunctions.HandleResizerPointerUp,
      params: ['handleResizerPointerUp', EventExpression.ClientX, EventExpression.ClientY],
    },
  ]
}
