export interface DisplaySettingItemOption {
  readonly id: string
  readonly label: string
}

export interface DisplaySettingItem {
  readonly id: string
  readonly heading: string
  readonly description: string
  readonly headingChildren?: readonly any[]
  readonly descriptionChildren?: readonly any[]
  readonly type: number
  readonly value: any
  readonly category: string
  readonly options?: readonly DisplaySettingItemOption[]
  readonly modified: boolean
  readonly errorMessage: string
  readonly hasError: boolean
}
