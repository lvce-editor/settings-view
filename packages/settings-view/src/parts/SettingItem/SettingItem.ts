export interface SettingItemOption {
  readonly id: string
  readonly label: string
}

export interface SettingItem {
  readonly id: string
  readonly heading: string
  readonly description: string
  readonly type: number
  readonly value: string // TODO
  readonly category: string
  readonly options?: readonly SettingItemOption[]

  // TODO add defaultValue property
}
