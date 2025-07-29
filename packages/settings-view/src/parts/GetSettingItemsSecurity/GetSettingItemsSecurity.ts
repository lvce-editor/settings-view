import type { SettingItem } from '../SettingItem/SettingItem.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SettingItemType from '../SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../SettingStrings/SettingStrings.ts'

export const getSettingItemsSecurity = (): readonly SettingItem[] => {
  return [
    {
      id: 'encryption',
      heading: SettingStrings.fileEncryption(),
      description: SettingStrings.fileEncryptionDescription(),
      type: SettingItemType.Boolean,
      value: 'false',
      category: InputName.SecurityTab,
    },
    {
      id: 'twoFactor',
      heading: SettingStrings.twoFactorAuth(),
      description: SettingStrings.twoFactorAuthDescription(),
      type: SettingItemType.Boolean,
      value: 'false',
      category: InputName.SecurityTab,
    },
  ]
}
