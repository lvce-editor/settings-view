import * as I18NString from '../I18NString/I18NString.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'

export const advanced = (): string => I18NString.i18nString(UiStrings.Advanced)

export const clear = (): string => I18NString.i18nString(UiStrings.Clear)

export const colorValue = (): string => I18NString.i18nString(UiStrings.ColorValue)

export const experimental = (): string => I18NString.i18nString(UiStrings.Experimental)

export const extensionId = (): string => I18NString.i18nString(UiStrings.ExtensionId)

export const feature = (): string => I18NString.i18nString(UiStrings.Feature)

export const filter = (): string => 'Filter'

export const language = (): string => I18NString.i18nString(UiStrings.Language)

export const matchingSettings = (count: number): string => {
  return I18NString.i18nString(UiStrings.MatchingSettings, { PH1: count.toString() })
}

export const modified = (): string => I18NString.i18nString(UiStrings.Modified)

export const noSettingsMatching = (searchTerm: string): string => {
  return I18NString.i18nString(UiStrings.NoSettingsMatching, { PH1: searchTerm })
}

export const numberValue = (): string => I18NString.i18nString(UiStrings.NumberValue)

export const preview = (): string => I18NString.i18nString(UiStrings.Preview)

export const resetSetting = (): string => I18NString.i18nString(UiStrings.ResetSetting)

export const searchSettings = (): string => I18NString.i18nString(UiStrings.SearchSettings)

export const settingId = (): string => I18NString.i18nString(UiStrings.SettingId)

export const settingsContent = (): string => I18NString.i18nString(UiStrings.SettingsContent)

export const stable = (): string => I18NString.i18nString(UiStrings.Stable)

export const stringValue = (): string => I18NString.i18nString(UiStrings.StringValue)

export const tag = (): string => I18NString.i18nString(UiStrings.Tag)

export const unknownSettingType = (): string => I18NString.i18nString(UiStrings.UnknownSettingType)
