import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'

export type Preferences = Readonly<Record<string, any>>

export interface SettingsState {
  readonly breakPointsExpanded: boolean
  readonly breakPointsVisible: boolean
  readonly filteredItems: readonly DisplaySettingItem[]
  readonly filteredItemsCount: number
  readonly focus: number
  readonly focusSource: number
  readonly deltaY: number
  readonly height: number
  readonly itemHeight: number
  readonly history: readonly string[]
  readonly historyIndex: number
  readonly id: number
  readonly inputSource: number
  readonly items: readonly SettingItem[]
  readonly maxLineY: number
  readonly minLineY: number
  readonly modifiedSettings: ModifiedSettings
  readonly preferences: Preferences
  readonly scrollOffset: number
  readonly searchValue: string
  readonly tabs: readonly Tab[]
  readonly visibleItems: readonly DisplaySettingItem[]
  readonly uri: string
  readonly width: number
  readonly x: number
  readonly y: number
}
