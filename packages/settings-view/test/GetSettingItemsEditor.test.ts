import { expect, test } from '@jest/globals'
import { getSettingItemsEditor } from '../src/parts/GetSettingItemsEditor/GetSettingItemsEditor.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as SettingItemType from '../src/parts/SettingItemType/SettingItemType.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingItemsEditor returns array of items', () => {
  const items = getSettingItemsEditor()

  expect(items).toBeDefined()
  expect(Array.isArray(items)).toBe(true)
  expect(items.length).toBeGreaterThan(0)
})

test('getSettingItemsEditor returns items with required properties', () => {
  const items = getSettingItemsEditor()

  for (const item of items) {
    expect(item.id).toBeDefined()
    expect(item.heading).toBeDefined()
    expect(item.description).toBeDefined()
    expect(item.type).toBeDefined()
    expect(item.value).toBeDefined()
    expect(item.category).toBeDefined()
    expect(typeof item.id).toBe('string')
    expect(typeof item.heading).toBe('string')
    expect(typeof item.description).toBe('string')
    expect(typeof item.type).toBe('number')
    expect(typeof item.category).toBe('string')
    expect(item.id.length).toBeGreaterThan(0)
    expect(item.heading.length).toBeGreaterThan(0)
    expect(item.description.length).toBeGreaterThan(0)
  }
})

test('getSettingItemsEditor returns items with TextEditorTab category', () => {
  const items = getSettingItemsEditor()

  for (const item of items) {
    expect(item.category).toBe(InputName.TextEditorTab)
  }
})

test('getSettingItemsEditor returns expected fontSize item', () => {
  const items = getSettingItemsEditor()
  const fontSizeItem = items.find((item) => item.id === 'editor.fontSize')

  expect(fontSizeItem).toBeDefined()
  expect(fontSizeItem?.heading).toBe(SettingStrings.fontSize())
  expect(fontSizeItem?.description).toBe(SettingStrings.fontSizeDescription())
  expect(fontSizeItem?.type).toBe(SettingItemType.Number)
  expect(fontSizeItem?.value).toBe(15)
  expect(fontSizeItem?.category).toBe(InputName.TextEditorTab)
  expect(fontSizeItem?.validate).toBeDefined()
})

test('getSettingItemsEditor fontSize validation works correctly', () => {
  const items = getSettingItemsEditor()
  const fontSizeItem = items.find((item) => item.id === 'editor.fontSize')

  expect(fontSizeItem?.validate).toBeDefined()
  if (fontSizeItem?.validate) {
    expect(fontSizeItem.validate(15)).toBe('')
    expect(fontSizeItem.validate(10)).toBe('')
    expect(fontSizeItem.validate(100)).toBe('')
    expect(fontSizeItem.validate(9)).toBe('font size must be at least 10')
    expect(fontSizeItem.validate(101)).toBe('font size must not be greater than 100')
    expect(fontSizeItem.validate('invalid')).toBe('font size must be of type number')
  }
})

test('getSettingItemsEditor returns expected fontFamily item', () => {
  const items = getSettingItemsEditor()
  const fontFamilyItem = items.find((item) => item.id === 'editor.fontFamily')

  expect(fontFamilyItem).toBeDefined()
  expect(fontFamilyItem?.heading).toBe(SettingStrings.fontFamily())
  expect(fontFamilyItem?.description).toBe(SettingStrings.fontFamilyDescription())
  expect(fontFamilyItem?.type).toBe(SettingItemType.String)
  expect(fontFamilyItem?.value).toBe('Fira Code')
  expect(fontFamilyItem?.category).toBe(InputName.TextEditorTab)
})

test('getSettingItemsEditor returns expected wordWrap item with options', () => {
  const items = getSettingItemsEditor()
  const wordWrapItem = items.find((item) => item.id === 'editor.wordWrap')

  expect(wordWrapItem).toBeDefined()
  expect(wordWrapItem?.heading).toBe(SettingStrings.wordWrap())
  expect(wordWrapItem?.description).toBe(SettingStrings.wordWrapDescription())
  expect(wordWrapItem?.type).toBe(SettingItemType.Enum)
  expect(wordWrapItem?.value).toBe('off')
  expect(wordWrapItem?.category).toBe(InputName.TextEditorTab)
  expect(wordWrapItem?.options).toBeDefined()
  expect(wordWrapItem?.options).toHaveLength(2)
  expect(wordWrapItem?.options?.[0].id).toBe('editor.on')
  expect(wordWrapItem?.options?.[0].label).toBe('On')
  expect(wordWrapItem?.options?.[1].id).toBe('editor.off')
  expect(wordWrapItem?.options?.[1].label).toBe('off')
})

test('getSettingItemsEditor returns expected lineNumbers item with options', () => {
  const items = getSettingItemsEditor()
  const lineNumbersItem = items.find((item) => item.id === 'editor.lineNumbers')

  expect(lineNumbersItem).toBeDefined()
  expect(lineNumbersItem?.heading).toBe(SettingStrings.lineNumbers())
  expect(lineNumbersItem?.description).toBe(SettingStrings.lineNumbersDescription())
  expect(lineNumbersItem?.type).toBe(SettingItemType.Enum)
  expect(lineNumbersItem?.value).toBe('on')
  expect(lineNumbersItem?.category).toBe(InputName.TextEditorTab)
  expect(lineNumbersItem?.options).toBeDefined()
  expect(lineNumbersItem?.options).toHaveLength(2)
})

test('getSettingItemsEditor returns expected minimap item', () => {
  const items = getSettingItemsEditor()
  const minimapItem = items.find((item) => item.id === 'editor.minimap')

  expect(minimapItem).toBeDefined()
  expect(minimapItem?.heading).toBe(SettingStrings.minimap())
  expect(minimapItem?.description).toBe(SettingStrings.minimapDescription())
  expect(minimapItem?.type).toBe(SettingItemType.Boolean)
  expect(minimapItem?.value).toBe('true')
  expect(minimapItem?.category).toBe(InputName.TextEditorTab)
})

test('getSettingItemsEditor returns expected tabSize item with validation', () => {
  const items = getSettingItemsEditor()
  const tabSizeItem = items.find((item) => item.id === 'editor.tabSize')

  expect(tabSizeItem).toBeDefined()
  expect(tabSizeItem?.heading).toBe(SettingStrings.tabSize())
  expect(tabSizeItem?.description).toBe(SettingStrings.tabSizeDescription())
  expect(tabSizeItem?.type).toBe(SettingItemType.Number)
  expect(tabSizeItem?.value).toBe('4')
  expect(tabSizeItem?.category).toBe(InputName.TextEditorTab)
  expect(tabSizeItem?.validate).toBeDefined()
})

test('getSettingItemsEditor tabSize validation works correctly', () => {
  const items = getSettingItemsEditor()
  const tabSizeItem = items.find((item) => item.id === 'editor.tabSize')

  expect(tabSizeItem?.validate).toBeDefined()
  if (tabSizeItem?.validate) {
    expect(tabSizeItem.validate(4)).toBe('')
    expect(tabSizeItem.validate(1)).toBe('')
    expect(tabSizeItem.validate(8)).toBe('')
    expect(tabSizeItem.validate(0)).toBe('tab size must be at least 1')
    expect(tabSizeItem.validate(9)).toBe('tab size must not be greater than 8')
    expect(tabSizeItem.validate('invalid')).toBe('font size must be of type number')
  }
})

test('getSettingItemsEditor returns expected background color item', () => {
  const items = getSettingItemsEditor()
  const backgroundItem = items.find((item) => item.id === 'editor.background')

  expect(backgroundItem).toBeDefined()
  expect(backgroundItem?.heading).toBe('Editor background')
  expect(backgroundItem?.description).toBe('Editor background color')
  expect(backgroundItem?.type).toBe(SettingItemType.Color)
  expect(backgroundItem?.value).toBe('#567567')
  expect(backgroundItem?.category).toBe(InputName.TextEditorTab)
})

test('getSettingItemsEditor returns items with correct types', () => {
  const items = getSettingItemsEditor()

  for (const item of items) {
    expect([SettingItemType.Number, SettingItemType.String, SettingItemType.Boolean, SettingItemType.Enum, SettingItemType.Color]).toContain(
      item.type,
    )
  }
})

test('getSettingItemsEditor returns items with unique ids', () => {
  const items = getSettingItemsEditor()
  const ids = items.map((item) => item.id)
  const uniqueIds = new Set(ids)

  expect(ids.length).toBe(uniqueIds.size)
})
