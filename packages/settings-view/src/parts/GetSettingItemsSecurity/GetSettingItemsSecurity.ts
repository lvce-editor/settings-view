import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsSecurity = (): readonly SettingItem[] => {
  return [
    {
      category: InputName.SecurityTab,
      description: SettingStrings.fileEncryptionDescription(),
      heading: SettingStrings.fileEncryption(),
      id: 'encryption',
      type: SettingItemType.Boolean,
      value: 'false',
    },
    {
      category: InputName.SecurityTab,
      description: SettingStrings.twoFactorAuthDescription(),
      heading: SettingStrings.twoFactorAuth(),
      id: 'twoFactor',
      type: SettingItemType.Boolean,
      value: 'false',
    },
  ]
}
