import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getModifiedSettings } from '../GetModifiedSettings/GetModifiedSettings.ts'
import { getPreferences } from '../GetPreferences/GetPreferences.ts'
import { getSettingItems } from '../GetSettingItems/GetSettingItems.ts'
import { getTabs } from '../GetTabs/GetTabs.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'
import { Script } from '../InputSource/InputSource.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: SettingsState, savedState: unknown): Promise<SettingsState> => {
  const { history, historyIndex, scrollOffset, searchValue, sideBarWidth, tabId } = restoreState(savedState)
  const tabs = getTabs()
  const newTabs = getUpdatedTabs(tabs, tabId)
  const items: readonly SettingItem[] = await getSettingItems()
  const preferences = await getPreferences()
  const modifiedSettings: ModifiedSettings = getModifiedSettings(preferences)
  const filteredItems = getFilteredItems(items, newTabs, searchValue, modifiedSettings, preferences)
  const { height, itemHeight } = state
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, height, scrollOffset, itemHeight)
  const { scrollBarMinHeight } = state
  const { thumbHeight, thumbTop } = computeScrollBar(height, filteredItems.length, itemHeight, scrollOffset, scrollBarMinHeight)
  return {
    ...state,
    filteredItems,
    history,
    historyIndex,
    inputSource: Script,
    items,
    maxLineY,
    minLineY,
    modifiedSettings,
    preferences,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    scrollOffset,
    searchValue,
    sideBarWidth,
    tabs: newTabs,
    visibleItems,
  }
}
