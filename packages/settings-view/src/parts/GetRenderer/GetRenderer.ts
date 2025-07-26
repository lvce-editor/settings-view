import type { Renderer } from '../Renderer/Renderer.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'

export const getRenderer = (diffType: number): Renderer<SettingsState> => {
  switch (diffType) {
    case DiffType.RenderItems:
      return RenderItems.renderItems
    default:
      throw new Error('unknown renderer')
  }
}
