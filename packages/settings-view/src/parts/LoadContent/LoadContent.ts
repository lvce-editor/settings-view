import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { computeVisibleItems } from '../ComputeVisibleItems/ComputeVisibleItems.ts'
import { getFilteredItems } from '../GetFilteredItems/GetFilteredItems.ts'
import { getModifiedSettings } from '../GetModifiedSettings/GetModifiedSettings.ts'
import { getPreferences } from '../GetPreferences/GetPreferences.ts'
import { getSchemaErrors } from '../GetSchemaErrors/GetSchemaErrors.ts'
import { getSettingItems } from '../GetSettingItems/GetSettingItems.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'
import { getTabs } from '../GetTabs/GetTabs.ts'
import { getUpdatedTabs } from '../GetUpdatedTabs/GetUpdatedTabs.ts'
import { Script } from '../InputSource/InputSource.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: SettingsState, savedState: unknown): Promise<SettingsState> => {
  const { history, historyIndex, scrollOffset, searchValue, sideBarWidth, tabId } = restoreState(savedState)
  const tabs = await getTabs()
  const newTabs = getUpdatedTabs(tabs, tabId)
  const [items, preferences, schemaErrors] = await Promise.all([getSettingItems(), getPreferences(), getSchemaErrors()])
  const modifiedSettings: ModifiedSettings = getModifiedSettings(preferences)
  const filteredItems = getFilteredItems(items, newTabs, searchValue, modifiedSettings, preferences)
  const { height, itemHeight } = state
  const viewportHeight = getSettingsViewportHeight(height)
  const maxScrollable = Math.max(0, filteredItems.length * itemHeight - viewportHeight)
  const nextScrollOffset = Math.min(Math.max(0, scrollOffset), maxScrollable)
  const { maxLineY, minLineY, visibleItems } = computeVisibleItems(filteredItems, viewportHeight, nextScrollOffset, itemHeight)
  const { scrollBarMinHeight } = state
  const { thumbHeight, thumbTop } = computeScrollBar(viewportHeight, filteredItems.length, itemHeight, nextScrollOffset, scrollBarMinHeight)
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
    schemaErrors,
    scrollBarThumbHeight: thumbHeight,
    scrollBarThumbTop: thumbTop,
    scrollOffset: nextScrollOffset,
    searchValue,
    sideBarWidth,
    tabs: newTabs,
    visibleItems,
  }
}
