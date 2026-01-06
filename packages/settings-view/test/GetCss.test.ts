import { test, expect } from '@jest/globals'
import { getCss } from '../src/parts/GetCss/GetCss.ts'

test('getCss returns correct CSS with normal width', () => {
  const sideBarWidth = 250
  const result = getCss(sideBarWidth)

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 250px;
}
.SettingsResizer {
  color: yellow;
}
`,
  )
})

test('getCss returns correct CSS with zero width', () => {
  const sideBarWidth = 0
  const result = getCss(sideBarWidth)

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 0px;
}
.SettingsResizer {
  color: yellow;
}
`,
  )
})

test('getCss returns correct CSS with large width', () => {
  const sideBarWidth = 1000
  const result = getCss(sideBarWidth)

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 1000px;
}
.SettingsResizer {
  color: yellow;
}
`,
  )
})

test('getCss returns correct CSS with decimal width', () => {
  const sideBarWidth = 250.5
  const result = getCss(sideBarWidth)

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: 250.5px;
}
.SettingsResizer {
  color: yellow;
}
`,
  )
})

test('getCss returns correct CSS with negative width', () => {
  const sideBarWidth = -100
  const result = getCss(sideBarWidth)

  expect(result).toBe(
    `
.Settings {
  --SettingsSideBarWidth: -100px;
}
.SettingsResizer {
  color: yellow;
}
`,
  )
})

test('getCss includes SettingsResizer style', () => {
  const sideBarWidth = 200
  const result = getCss(sideBarWidth)

  expect(result).toContain('.SettingsResizer')
  expect(result).toContain('color: yellow;')
})

test('getCss includes Settings class with custom property', () => {
  const sideBarWidth = 300
  const result = getCss(sideBarWidth)

  expect(result).toContain('.Settings')
  expect(result).toContain('--SettingsSideBarWidth: 300px;')
})
