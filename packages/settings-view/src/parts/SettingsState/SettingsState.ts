import type { SettingItem } from '../SettingItem/SettingItem.ts'

export interface SettingsState {
  readonly breakPointsExpanded: boolean
  readonly breakPointsVisible: boolean
  readonly focus: number
  readonly height: number
  readonly id: number
  readonly items: readonly SettingItem[]
  readonly tabs: readonly string[]
  readonly uri: string
  readonly width: number
  readonly x: number
  readonly y: number
}
