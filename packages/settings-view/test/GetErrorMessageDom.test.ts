import { test, expect } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getErrorMessageDom } from '../src/parts/GetErrorMessageDom/GetErrorMessageDom.ts'

test('getErrorMessageDom returns empty array when error message is empty', () => {
  const result = getErrorMessageDom('')
  expect(result).toEqual([])
})

test('getErrorMessageDom returns virtual DOM with error message', () => {
  const errorMessage = 'This is an error message'
  const result = getErrorMessageDom(errorMessage)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.ErrorMessage,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Text,
    text: errorMessage,
    childCount: 0,
  })
})

test('getErrorMessageDom returns virtual DOM with non-empty error message', () => {
  const errorMessage = 'Invalid input value'
  const result = getErrorMessageDom(errorMessage)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.ErrorMessage,
    childCount: 1,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Text,
    text: errorMessage,
    childCount: 0,
  })
})
