import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getSettingsInputDom } from '../src/parts/GetSettingsInputDom/GetSettingsInputDom.ts'
import * as SettingStrings from '../src/parts/SettingStrings/SettingStrings.ts'

test('getSettingsInputDom disables suggestions and autocorrect', () => {
  const dom = getSettingsInputDom()

  expect(dom).toHaveLength(1)
  const input = dom[0]

  expect(input.type).toBe(VirtualDomElements.Input)
  expect(input.placeholder).toBe(SettingStrings.searchSettings())
  expect(input.childCount).toBe(0)

  expect(input.autocomplete).toBe('off')
  expect(input.autocorrect).toBe('off')
  expect(input.autocapitalize).toBe('off')
  expect(input.spellcheck).toBe(false)
})
