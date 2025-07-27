export interface SettingItemOption {
  readonly id: string
  readonly label: string
}

export interface SettingItem {
  readonly id: string
  readonly heading: string
  readonly description: string
  readonly type: number
  readonly value: string // TODO support different value types
  readonly category: string
  readonly options?: readonly SettingItemOption[]
  readonly modified?: boolean // TODO maybe have two types of settings: one with the modified property and one without
  // TODO add defaultValue property
}
