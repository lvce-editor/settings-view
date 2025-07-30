import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { ModifiedSettings } from '../ModifiedSettings/ModifiedSettings.ts'
import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'

export interface SettingsState {
  readonly breakPointsExpanded: boolean
  readonly breakPointsVisible: boolean
  readonly filteredItems: readonly DisplaySettingItem[]
  readonly filteredItemsCount: number
  readonly focus: number
  readonly height: number
  readonly history: readonly string[]
  readonly historyIndex: number
  readonly id: number
  readonly inputSource: number
  readonly items: readonly SettingItem[]
  readonly modifiedSettings: ModifiedSettings
  readonly preferences: any
  readonly scrollOffset: number
  readonly searchValue: string
  readonly tabs: readonly Tab[]
  readonly uri: string
  readonly width: number
  readonly x: number
  readonly y: number
  readonly focusSource: number
}
