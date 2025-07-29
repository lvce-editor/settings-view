import type { Renderer } from '../Renderer/Renderer.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import { renderScrollOffset } from '../RenderScrollOffset/RenderScrollOffset.ts'
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
    case DiffType.RenderScrollOffset:
      return renderScrollOffset
    default:
      throw new Error('unknown renderer')
  }
}
