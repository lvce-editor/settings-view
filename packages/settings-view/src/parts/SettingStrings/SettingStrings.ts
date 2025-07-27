import * as I18NString from '../I18NString/I18NString.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'

export const clear = (): string => {
  return I18NString.i18nString(UiStrings.Clear)
}

export const numberValue = (): string => {
  return I18NString.i18nString(UiStrings.NumberValue)
}

export const searchSettings = (): string => {
  return I18NString.i18nString(UiStrings.SearchSettings)
}

export const settingsContent = (): string => {
  return I18NString.i18nString(UiStrings.SettingsContent)
}

export const settingsSideBar = (): string => {
  return I18NString.i18nString(UiStrings.SettingsSideBar)
}
