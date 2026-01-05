export interface DisplaySettingItemOption {
  readonly id: string
  readonly label: string
}

export interface DisplaySettingItem {
  readonly category: string
  readonly description: string
  readonly errorMessage: string
  readonly hasError: boolean
  readonly heading: string
  readonly id: string
  readonly modified: boolean
  readonly options?: readonly DisplaySettingItemOption[]
  readonly type: number
  readonly value: any
}
