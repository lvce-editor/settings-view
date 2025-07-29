import { expect, test } from '@jest/globals'
import { getSettingItems } from '../src/parts/GetSettingItems/GetSettingItems.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingItems returns items with i18n strings', async () => {
  const items = await getSettingItems()

  expect(items).toBeDefined()
  expect(Array.isArray(items)).toBe(true)
  expect(items.length).toBeGreaterThan(0)

  // Check that all items have i18n strings for headings and descriptions
  for (const item of items) {
    expect(item.heading).toBeDefined()
    expect(item.description).toBeDefined()
    expect(typeof item.heading).toBe('string')
    expect(typeof item.description).toBe('string')
    expect(item.heading.length).toBeGreaterThan(0)
    expect(item.description.length).toBeGreaterThan(0)
  }
})

test('getSettingItems returns expected font size item', async () => {
  const items = await getSettingItems()
  const fontSizeItem = items.find((item) => item.id === 'editor.fontSize')

  expect(fontSizeItem).toBeDefined()
  expect(fontSizeItem?.heading).toBe(SettingStrings.fontSize())
  expect(fontSizeItem?.description).toBe(SettingStrings.fontSizeDescription())
})

test('getSettingItems returns expected theme item', async () => {
  const items = await getSettingItems()
  const themeItem = items.find((item) => item.id === 'theme')

  expect(themeItem).toBeDefined()
  expect(themeItem?.heading).toBe(SettingStrings.theme())
  expect(themeItem?.description).toBe(SettingStrings.themeDescription())
})

test('getSettingItems returns expected auto save item', async () => {
  const items = await getSettingItems()
  const autoSaveItem = items.find((item) => item.id === 'autoSave')

  expect(autoSaveItem).toBeDefined()
  expect(autoSaveItem?.heading).toBe(SettingStrings.autoSave())
  expect(autoSaveItem?.description).toBe(SettingStrings.autoSaveDescription())
})
