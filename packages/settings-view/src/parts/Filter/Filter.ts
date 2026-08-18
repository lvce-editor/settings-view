import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { handleInput } from '../HandleInput/HandleInput.ts'
import { Script } from '../InputSource/InputSource.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

const applyFilter = (state: SettingsState, searchValue: string): SettingsState => {
  const newState = handleInput(state, searchValue, Script)
  return {
    ...newState,
    focus: WhenExpression.FocusSettingsInput,
    focusSource: Script,
  }
}

const appendFilter = (state: SettingsState, filter: string): SettingsState => {
  const { searchValue: currentSearchValue } = state
  const searchValue = currentSearchValue.trimEnd()
  const newSearchValue = searchValue ? `${searchValue} ${filter}` : filter
  return applyFilter(state, newSearchValue)
}

const toggleFilter = (state: SettingsState, filter: string): SettingsState => {
  const { searchValue } = state
  const words = searchValue.split(' ')
  const newSearchValue = words.includes(filter) ? words.filter((word) => word !== filter).join(' ') : [...words.filter(Boolean), filter].join(' ')
  return applyFilter(state, newSearchValue)
}

const toggleExclusiveFilter = (state: SettingsState, filter: string, excludedFilters: readonly string[]): SettingsState => {
  const { searchValue } = state
  const words = searchValue.split(' ')
  if (words.includes(filter)) {
    return applyFilter(state, words.filter((word) => word !== filter).join(' '))
  }
  const newSearchValue = [...words.filter((word) => word && word !== filter && !excludedFilters.includes(word)), filter].join(' ')
  return applyFilter(state, newSearchValue)
}

export const filterAdvanced = (state: SettingsState): SettingsState => toggleFilter(state, '@tag:advanced')

export const filterExperimental = (state: SettingsState): SettingsState =>
  toggleExclusiveFilter(state, '@tag:experimental', ['@stable', '@tag:preview'])

export const filterExtensionId = (state: SettingsState): SettingsState => appendFilter(state, '@ext:')

export const filterFeature = (state: SettingsState): SettingsState => appendFilter(state, '@feature:')

export const filterLanguage = (state: SettingsState): SettingsState => appendFilter(state, '@lang:')

export const filterModified = (state: SettingsState): SettingsState => toggleFilter(state, '@modified')

export const filterPreview = (state: SettingsState): SettingsState => toggleExclusiveFilter(state, '@tag:preview', ['@stable', '@tag:experimental'])

export const filterSettingId = (state: SettingsState): SettingsState => appendFilter(state, '@id:')

export const filterStable = (state: SettingsState): SettingsState => toggleExclusiveFilter(state, '@stable', ['@tag:preview', '@tag:experimental'])

export const filterTag = (state: SettingsState): SettingsState => appendFilter(state, '@tag:')
