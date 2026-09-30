import type { SettingsState } from '../SettingsState/SettingsState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import { getSettingsDom } from '../GetSettingsDom/GetSettingsDom.ts'
import { getSettingsItemsDom } from '../GetSettingsItemsDom/GetSettingsItemsDom.ts'

export const renderItems = (oldState: SettingsState, newState: SettingsState): ViewletCommand => {
  const dom = getSettingsDom(newState)
  if (newState.scrollBarActive) {
    // Replace only the row container; the sibling scrollbar must keep pointer capture.
    const { filteredItems, itemHeight, maxLineY, minLineY, preferences, searchValue, visibleItems } = newState
    const items = getSettingsItemsDom(
      visibleItems,
      searchValue,
      preferences,
      minLineY * itemHeight,
      Math.max(0, (filteredItems.length - maxLineY) * itemHeight),
    )
    return [
      'Viewlet.setPatches',
      newState.id,
      [
        // Settings -> main -> content -> row wrapper -> rows.
        ...[1, 2, 1, 0].map((index) => ({ index, type: 7 })),
        { nodes: items, type: 2 },
      ],
    ]
  }
  return ['Viewlet.setDom2', newState.id, dom]
}
