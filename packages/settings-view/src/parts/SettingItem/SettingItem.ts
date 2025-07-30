export interface SettingItemOption {
  readonly id: string
  readonly label: string
}

export interface SettingItem {
  readonly id: string
  readonly heading: string
  readonly description: string
  readonly type: number
  readonly value: any // TODO support different value types
  readonly category: string
  readonly options?: readonly SettingItemOption[]
  readonly validate?: (value: any) => string // TODO add defaultValue property
}
