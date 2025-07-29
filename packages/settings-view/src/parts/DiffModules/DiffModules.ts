import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffScrollOffset from '../DiffScrollOffset/DiffScrollOffset.ts'
import * as DiffSettingValues from '../DiffSettingValues/DiffSettingValues.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'

export const modules = [
  DiffItems.isEqual,
  DiffValue.isEqual,
  DiffSettingValues.isEqual,
  DiffScrollOffset.isEqual,
  DiffFocus.isEqual,
  DiffFocus.isEqual,
]

export const numbers = [
  DiffType.RenderItems,
  DiffType.RenderValue,
  DiffType.RenderSettingValues,
  DiffType.RenderScrollOffset,
  DiffType.RenderFocus,
  DiffType.RenderFocusContext,
]
