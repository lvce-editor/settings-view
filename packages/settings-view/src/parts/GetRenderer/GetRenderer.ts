import type { Renderer } from '../Renderer/Renderer.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import { renderCss } from '../RenderCss/RenderCss.ts'
import { renderFocus } from '../RenderFocus/RenderFocus.ts'
import { renderFocusContext } from '../RenderFocusContext/RenderFocusContext.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import { renderSettingValues } from '../RenderSettingValues/RenderSettingValues.ts'
import { renderValue } from '../RenderValue/RenderValue.ts'

export const getRenderer = (diffType: number): Renderer<SettingsState> => {
  switch (diffType) {
    case DiffType.RenderItems:
      return RenderItems.renderItems
    case DiffType.RenderValue:
      return renderValue
    case DiffType.RenderSettingValues:
      return renderSettingValues
    case DiffType.RenderFocusContext:
      return renderFocusContext
    case DiffType.RenderFocus:
      return renderFocus
    case DiffType.RenderCss:
      return renderCss
    default:
      throw new Error('unknown renderer')
  }
}
