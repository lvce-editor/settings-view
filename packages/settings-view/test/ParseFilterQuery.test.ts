import { expect, test } from '@jest/globals'
import { parseFilterQuery } from '../src/parts/ParseFilterQuery/ParseFilterQuery.ts'

test('parses an empty query', () => {
  expect(parseFilterQuery('')).toEqual({ id: '', language: '', modified: false, query: '' })
})

test('parses the modified filter', () => {
  expect(parseFilterQuery('font @modified family')).toEqual({ id: '', language: '', modified: true, query: 'font family' })
})

test('does not parse partial modified filter matches', () => {
  expect(parseFilterQuery('@modifiedElse')).toEqual({ id: '', language: '', modified: false, query: '@modifiedElse' })
})
