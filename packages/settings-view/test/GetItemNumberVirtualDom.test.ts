import { expect, test } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getItemNumberVirtualDom } from '../src/parts/GetItemNumberVirtualDom/GetItemNumberVirtualDom.ts'

test('getItemNumberVirtualDom returns expected DOM structure for normal item', () => {
  const item = {
    id: 'testItem',
    heading: 'Test Heading',
    description: 'Test Description',
    type: 1,
    value: '42',
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Test Heading'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Test Description'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'number',
      placeholder: 'number value',
      childCount: 0,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles empty strings', () => {
  const item = {
    id: 'emptyItem',
    heading: '',
    description: '',
    type: 1,
    value: '',
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text(''),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text(''),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'number',
      placeholder: 'number value',
      childCount: 0,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles special characters in heading and description', () => {
  const item = {
    id: 'specialCharsItem',
    heading: 'Heading with & < > " \' chars',
    description: 'Description with & < > " \' chars',
    type: 1,
    value: '123',
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Heading with & < > " \' chars'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Description with & < > " \' chars'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'number',
      placeholder: 'number value',
      childCount: 0,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles long text', () => {
  const item = {
    id: 'longTextItem',
    heading: 'This is a very long heading that might wrap to multiple lines in the UI',
    description: 'This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface',
    type: 1,
    value: '999999',
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('This is a very long heading that might wrap to multiple lines in the UI'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('This is a very long description that contains a lot of text and might also wrap to multiple lines in the user interface'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'number',
      placeholder: 'number value',
      childCount: 0,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom handles numeric values in item', () => {
  const item = {
    id: 'numericItem',
    heading: 'Numeric Test',
    description: 'Testing with numeric values',
    type: 42,
    value: '0',
    category: 'test',
  }

  const virtualDom = getItemNumberVirtualDom(item)

  const expectedDom = [
    {
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    },
    {
      type: VirtualDomElements.H3,
      childCount: 1,
    },
    text('Numeric Test'),
    {
      type: VirtualDomElements.P,
      childCount: 1,
    },
    text('Testing with numeric values'),
    {
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'number',
      placeholder: 'number value',
      childCount: 0,
    },
  ]

  expect(virtualDom).toEqual(expectedDom)
})

test('getItemNumberVirtualDom maintains consistent structure regardless of content', () => {
  const items = [
    {
      id: 'item1',
      heading: 'Item 1',
      description: 'Description 1',
      type: 1,
      value: '1',
      category: 'test',
    },
    {
      id: 'item2',
      heading: 'Item 2',
      description: 'Description 2',
      type: 2,
      value: '2',
      category: 'test',
    },
    {
      id: 'item3',
      heading: 'Item 3',
      description: 'Description 3',
      type: 3,
      value: '3',
      category: 'test',
    },
  ]

  for (const item of items) {
    const virtualDom = getItemNumberVirtualDom(item)

    expect(virtualDom).toHaveLength(6)
    expect(virtualDom[0]).toEqual({
      type: VirtualDomElements.Div,
      className: 'SettingsItem',
      childCount: 3,
    })
    expect(virtualDom[1]).toEqual({
      type: VirtualDomElements.H3,
      childCount: 1,
    })
    expect(virtualDom[2]).toEqual(text(item.heading))
    expect(virtualDom[3]).toEqual({
      type: VirtualDomElements.P,
      childCount: 1,
    })
    expect(virtualDom[4]).toEqual(text(item.description))
    expect(virtualDom[5]).toEqual({
      type: VirtualDomElements.Input,
      className: 'InputBox',
      inputType: 'number',
      placeholder: 'number value',
      childCount: 0,
    })
  }
})
