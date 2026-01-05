export interface SettingItemOption {
  readonly id: string
  readonly label: string
}

export interface SettingItem {
  readonly category: string
  readonly description: string
  readonly heading: string
  readonly id: string
  readonly options?: readonly SettingItemOption[]
  readonly type: number
  readonly validate?: (value: any) => string // TODO add defaultValue property
  readonly value: any // TODO support different value types
}
