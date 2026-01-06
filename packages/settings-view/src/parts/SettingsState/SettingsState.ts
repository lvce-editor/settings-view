import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'

export interface SettingsState {
  readonly breakPointsExpanded: boolean
  readonly breakPointsVisible: boolean
  readonly deltaY: number
  readonly filteredItems: readonly DisplaySettingItem[]
  readonly filteredItemsCount: number
  readonly focus: number
  readonly focusSource: number
  readonly height: number
  readonly highlightsEnabled: boolean
  readonly history: readonly string[]
  readonly historyIndex: number
  readonly id: number
  readonly inputSource: number
  readonly itemHeight: number
  readonly items: readonly SettingItem[]
  readonly maxLineY: number
  readonly minLineY: number
  readonly modifiedSettings: ModifiedSettings
  readonly preferences: Preferences
  readonly scrollBarMinHeight: number
  readonly scrollBarThumbHeight: number
  readonly scrollBarThumbTop: number
  readonly scrollOffset: number
  readonly searchValue: string
  readonly sideBarWidth: number
  readonly tabs: readonly Tab[]
  readonly uri: string
  readonly visibleItems: readonly DisplaySettingItem[]
  readonly width: number
  readonly x: number
  readonly y: number
}
