import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleClickContinue,
      params: ['handleClickContinue'],
    },
    {
      name: DomEventListenerFunctions.HandleClickDebugButton,
      params: ['handleClickDebugButton', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleClickPause,
      params: ['handleClickPause'],
    },
    {
      name: DomEventListenerFunctions.HandleClickStepOver,
      params: ['handleClickStepOver'],
    },
    {
      name: DomEventListenerFunctions.HandleClickStepInto,
      params: ['handleClickStepInto'],
    },
    {
      name: DomEventListenerFunctions.HandleClickStepOut,
      params: ['handleClickStepOut'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionWatch,
      params: ['HandleClickSectionWatch'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionBreakPoints,
      params: ['handleClickSectionBreakpoints'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionScope,
      params: ['handleClickSectionScope'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionCallstack,
      params: ['handleClickSectionCallstack'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionBreakPoints,
      params: ['handleClickSectionBreakPoints'],
    },
    {
      name: DomEventListenerFunctions.HandleDebugInput,
      params: ['handleDebugInput', 'event.target.value'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionHeading,
      params: ['handleClickSectionHeading', 'event.target.dataset.name', 'event.button'],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleClickCheckBox,
      params: ['handleClickCheckBox', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleClickDebugButton,
      params: ['handleClickDebugButton', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleClickCallStackItem,
      params: ['handleClickCallStackItem', 'event.target.dataset.index'],
    },
    {
      name: DomEventListenerFunctions.HandleClickWatchExpression,
      params: ['handleClickWatchExpression', 'event.target.dataset.index', 'event.defaultPrevented'],
    },
    {
      name: DomEventListenerFunctions.HandleClickWatchExpressionDelete,
      params: ['handleClickWatchExpressionDelete', 'event.target.dataset.index'],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleClickScopeValue,
      params: ['handleClickScopeValue', 'event.target.dataset.index', 'event.button'],
    },
    {
      name: DomEventListenerFunctions.HandleInputFieldChange,
      params: ['handleInputFieldChange', 'event.target.name', 'event.target.value'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionAction,
      params: ['handleClickSectionAction', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleInputBlur,
      params: ['handleInputBlur'],
    },
    {
      name: DomEventListenerFunctions.HandleSectionHeaderContextMenu,
      params: ['handleSectionHeaderContextMenu', 'event.clientX', 'event.clientY', 'event.target.dataset.name'],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleWatchExpressionContextMenu,
      params: ['handleWatchExpressionContextMenu', 'event.clientX', 'event.clientY', 'event.target.dataset.index'],
      preventDefault: true,
    },
  ]
}
