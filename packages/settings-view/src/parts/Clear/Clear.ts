import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { Script } from '../InputSource/InputSource.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const clear = (state: SettingsState): SettingsState => {
  const { items, tabs, modifiedSettings, preferences } = state
  const newSearchValue = ''
  const filteredItems = getFilteredItems(items, tabs, newSearchValue, modifiedSettings, preferences)
  return {
    ...state,
    filteredItems,
    focus: WhenExpression.FocusSettingsInput,
    focusSource: Script,
    inputSource: Script,
    searchValue: newSearchValue,
  }
}
