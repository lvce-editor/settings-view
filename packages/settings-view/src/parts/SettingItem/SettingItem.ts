export interface SettingItem {
  readonly id: string
  readonly heading: string
  readonly description: string
  readonly type: number
  readonly value: string // TODO
  readonly category: string

  // TODO add defaultValue property
}
