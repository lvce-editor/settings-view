import { test, expect } from '@jest/globals'
import { getCss } from '../src/parts/GetCss/GetCss.ts'

const visibleSections = [
  {
    className: 'Section-1',
    height: 75,
    index: 0,
    item: {
      category: 'text-editor',
      description: 'Description 1',
      errorMessage: '',
      hasError: false,
      heading: 'Heading 1',
      id: 'setting-1',
      modified: false,
      type: 2,
      value: 'abc',
    },
    top: 0,
  },
  {
    className: 'Section-2',
    height: 65,
    index: 1,
    item: {
      category: 'text-editor',
      description: 'Description 2',
      errorMessage: '',
      hasError: false,
      heading: 'Heading 2',
      id: 'setting-2',
      modified: false,
      type: 3,
      value: true,
    },
    top: 75,
  },
] as const

test('getCss returns correct CSS with normal width', () => {
  const sideBarWidth = 250
  const scrollBarThumbHeight = 100
  const scrollBarThumbTop = 50
  const result = getCss(sideBarWidth, scrollBarThumbHeight, scrollBarThumbTop, visibleSections)

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 250px;
  --ScrollBarThumbHeight: 100px;
  --ScrollBarThumbTop: 50px;
  --SectionHeight-1: 75px;
  --SectionHeight-2: 65px;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}

.Section-1 {
  height: var(--SectionHeight-1);
}

.Section-2 {
  height: var(--SectionHeight-2);
}
`,
  )
})

test('getCss returns correct CSS with zero width', () => {
  const sideBarWidth = 0
  const scrollBarThumbHeight = 0
  const scrollBarThumbTop = 0
  const result = getCss(sideBarWidth, scrollBarThumbHeight, scrollBarThumbTop, [])

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 0px;
  --ScrollBarThumbHeight: 0px;
  --ScrollBarThumbTop: 0px;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`,
  )
})

test('getCss returns correct CSS with large width', () => {
  const sideBarWidth = 1000
  const scrollBarThumbHeight = 200
  const scrollBarThumbTop = 150
  const result = getCss(sideBarWidth, scrollBarThumbHeight, scrollBarThumbTop, [])

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 1000px;
  --ScrollBarThumbHeight: 200px;
  --ScrollBarThumbTop: 150px;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`,
  )
})

test('getCss returns correct CSS with decimal width', () => {
  const sideBarWidth = 250.5
  const scrollBarThumbHeight = 100
  const scrollBarThumbTop = 50
  const result = getCss(sideBarWidth, scrollBarThumbHeight, scrollBarThumbTop, [])

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 251px;
  --ScrollBarThumbHeight: 100px;
  --ScrollBarThumbTop: 50px;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`,
  )
})

test('getCss returns correct CSS with negative width', () => {
  const sideBarWidth = -100
  const scrollBarThumbHeight = 100
  const scrollBarThumbTop = 50
  const result = getCss(sideBarWidth, scrollBarThumbHeight, scrollBarThumbTop, [])

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: -100px;
  --ScrollBarThumbHeight: 100px;
  --ScrollBarThumbTop: 50px;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`,
  )
})

test('getCss does not include SettingsResizer style', () => {
  const sideBarWidth = 200
  const scrollBarThumbHeight = 100
  const scrollBarThumbTop = 50
  const result = getCss(sideBarWidth, scrollBarThumbHeight, scrollBarThumbTop, visibleSections)

  expect(result).not.toContain('.SettingsResizer')
  expect(result).not.toContain('background: yellow;')
})

test('getCss includes Settings class with custom property', () => {
  const sideBarWidth = 300
  const scrollBarThumbHeight = 100
  const scrollBarThumbTop = 50
  const result = getCss(sideBarWidth, scrollBarThumbHeight, scrollBarThumbTop, visibleSections)

  expect(result).toContain('.Settings')
  expect(result).toContain('--SettingsSideBarWidth: 300px;')
  expect(result).toContain('--ScrollBarThumbHeight: 100px;')
  expect(result).toContain('--ScrollBarThumbTop: 50px;')
  expect(result).toContain('--SectionHeight-1: 75px;')
  expect(result).toContain('.Section-1')
})
