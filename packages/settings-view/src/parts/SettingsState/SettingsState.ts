import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { Preferences } from '../Preferences/Preferences.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'
import type { VisibleSection } from '../VisibleSection/VisibleSection.ts'

export interface SettingsState {
  readonly bottomSpacerHeight: number
  readonly breakPointsExpanded: boolean
  readonly breakPointsVisible: boolean
  readonly checkBoxHeight: number
  readonly deltaY: number
  readonly filteredItems: readonly DisplaySettingItem[]
  readonly filteredItemsCount: number
  readonly focus: number
  readonly focusSource: number
  readonly headingFontSize: number
  readonly headingPaddingBottom: number
  readonly headingPaddingTop: number
  readonly height: number
  readonly highlightsEnabled: boolean
  readonly history: readonly string[]
  readonly historyIndex: number
  readonly id: number
  readonly inputBoxHeight: number
  readonly inputSource: number
  readonly itemHeight: number
  readonly items: readonly SettingItem[]
  readonly labelFontSize: number
  readonly maxLineY: number
  readonly minContentWidth: number
  readonly minLineY: number
  readonly modifiedSettings: ModifiedSettings
  readonly preferences: Preferences
  readonly scrollBarMinHeight: number
  readonly scrollBarThumbHeight: number
  readonly scrollBarThumbTop: number
  readonly scrollOffset: number
  readonly searchValue: string
  readonly selectHeight: number
  readonly sideBarMinWidth: number
  readonly sideBarWidth: number
  readonly tabs: readonly Tab[]
  readonly topSpacerHeight: number
  readonly totalContentHeight: number
  readonly uri: string
  readonly visibleItems: readonly DisplaySettingItem[]
  readonly visibleSections: readonly VisibleSection[]
  readonly width: number
  readonly x: number
  readonly y: number
}
