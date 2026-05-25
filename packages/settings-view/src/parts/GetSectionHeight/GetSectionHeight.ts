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

  if (item.type === SettingItemType.Boolean || item.type === SettingItemType.Color) {
    return headingHeight + metrics.labelFontSize + metrics.checkBoxHeight + errorHeight
  }

  if (item.type === SettingItemType.Enum) {
    return headingHeight + metrics.labelFontSize + metrics.selectHeight + errorHeight
  }

  if (item.type === SettingItemType.Number || item.type === SettingItemType.String || item.type === SettingItemType.Url) {
    return headingHeight + metrics.labelFontSize + metrics.inputBoxHeight + errorHeight
  }

  return headingHeight + errorHeight
}
