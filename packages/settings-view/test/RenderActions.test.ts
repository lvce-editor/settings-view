import { test, expect } from '@jest/globals'
import { renderActions } from '../src/parts/RenderActions/RenderActions.ts'

test('renderActions should return empty array', () => {
  const result = renderActions()
  expect(result).toBeDefined()
})
