import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'

export const modules = [DiffFocus.isEqual, DiffItems.isEqual, DiffValue.isEqual]

export const numbers = [DiffType.RenderFocus, DiffType.RenderItems, DiffType.RenderValue]
