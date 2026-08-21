import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import {
  filterAdvanced,
  filterExperimental,
  filterExtensionId,
  filterFeature,
  filterLanguage,
  filterModified,
  filterPreview,
  filterSettingId,
  filterStable,
  filterTag,
} from '../src/parts/Filter/Filter.ts'
import { Script } from '../src/parts/InputSource/InputSource.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test.each([
  [filterAdvanced, '@tag:advanced'],
  [filterExperimental, '@tag:experimental'],
  [filterExtensionId, '@ext:'],
  [filterFeature, '@feature:'],
  [filterLanguage, '@lang:'],
  [filterModified, '@modified'],
  [filterPreview, '@tag:preview'],
  [filterSettingId, '@id:'],
  [filterStable, '@stable'],
  [filterTag, '@tag:'],
])('filter command applies %s', (filterCommand, expectedSearchValue) => {
  const result = filterCommand(createDefaultState())

  expect(result.searchValue).toBe(expectedSearchValue)
  expect(result.inputSource).toBe(Script)
  expect(result.focus).toBe(WhenExpression.FocusSettingsInput)
  expect(result.focusSource).toBe(Script)
})

test.each([
  [filterAdvanced, '@tag:advanced'],
  [filterExperimental, '@tag:experimental'],
  [filterModified, '@modified'],
  [filterPreview, '@tag:preview'],
  [filterStable, '@stable'],
])('filter command toggles %s', (filterCommand, searchValue) => {
  const state = { ...createDefaultState(), searchValue: `font ${searchValue}` }

  const result = filterCommand(state)

  expect(result.searchValue).toBe('font')
})

test.each([
  [filterExperimental, '@tag:experimental', 'font @stable @tag:preview'],
  [filterPreview, '@tag:preview', 'font @stable @tag:experimental'],
  [filterStable, '@stable', 'font @tag:preview @tag:experimental'],
])('release-channel filter %s replaces mutually exclusive filters', (filterCommand, expectedSearchValue, initialSearchValue) => {
  const state = { ...createDefaultState(), searchValue: initialSearchValue }

  const result = filterCommand(state)

  expect(result.searchValue).toBe(`font ${expectedSearchValue}`)
})

test('append filter preserves the existing query', () => {
  const state = { ...createDefaultState(), searchValue: 'font ' }

  const result = filterSettingId(state)

  expect(result.searchValue).toBe('font @id:')
})
