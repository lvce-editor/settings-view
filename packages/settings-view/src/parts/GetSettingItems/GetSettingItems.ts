import type { SettingItem } from '../SettingItem/SettingItem.ts'
import { getSettingItemsApplications } from '../GetSettingItemsApplications/GetSettingItemsApplications.ts'
import { getSettingItemsEditor } from '../GetSettingItemsEditor/GetSettingItemsEditor.ts'
import { getSettingItemsExtensions } from '../GetSettingItemsExtensions/GetSettingItemsExtensions.ts'
import { getSettingItemsFeatures } from '../GetSettingItemsFeatures/GetSettingItemsFeatures.ts'
import { getSettingItemsSecurity } from '../GetSettingItemsSecurity/GetSettingItemsSecurity.ts'
import { getSettingItemsWindow } from '../GetSettingItemsWindow/GetSettingItemsWindow.ts'
import { getSettingItemsWorkbench } from '../GetSettingItemsWorkbench/GetSettingItemsWorkbench.ts'

export const getSettingItems = async (): Promise<readonly SettingItem[]> => {
  return [
    ...getSettingItemsEditor(),
    ...getSettingItemsWorkbench(),
    ...getSettingItemsWindow(),
    ...getSettingItemsFeatures(),
    ...getSettingItemsApplications(),
    ...getSettingItemsSecurity(),
    ...getSettingItemsExtensions(),
  ]
}
