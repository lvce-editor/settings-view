import type { DisplaySettingItem } from '../DisplaySettingItem/DisplaySettingItem.ts'
import type { SectionHeightMetrics } from '../SectionHeightMetrics/SectionHeightMetrics.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'

const getHeadingHeight = (metrics: SectionHeightMetrics): number => {
  return metrics.headingPaddingTop + metrics.headingFontSize + metrics.headingPaddingBottom
}

const getErrorHeight = (item: DisplaySettingItem, metrics: SectionHeightMetrics): number => {
  return item.hasError && item.errorMessage ? metrics.labelFontSize : 0
}

export const getSectionHeight = (item: DisplaySettingItem, metrics: SectionHeightMetrics): number => {
  const headingHeight = getHeadingHeight(metrics)
  const errorHeight = getErrorHeight(item, metrics)

  switch (item.type) {
    case SettingItemType.String:
    case SettingItemType.Number:
    case SettingItemType.Url:
      return headingHeight + metrics.labelFontSize + metrics.inputBoxHeight + errorHeight
    case SettingItemType.Enum:
      return headingHeight + metrics.labelFontSize + metrics.selectHeight + errorHeight
    case SettingItemType.Boolean:
    case SettingItemType.Color:
      return headingHeight + metrics.labelFontSize + metrics.checkBoxHeight + errorHeight
    default:
      return headingHeight + errorHeight
  }
}