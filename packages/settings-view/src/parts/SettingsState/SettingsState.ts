import type { SettingItem } from '../SettingItem/SettingItem.ts'
import type { Tab } from '../Tab/Tab.ts'

export interface SettingsState {
  readonly breakPointsExpanded: boolean
  readonly breakPointsVisible: boolean
  readonly filteredItems: readonly SettingItem[]
  readonly focus: number
  readonly height: number
  readonly id: number
  readonly items: readonly SettingItem[]
  readonly searchValue: string
  readonly tabs: readonly Tab[]
  readonly uri: string
  readonly width: number
  readonly x: number
  readonly y: number
}
