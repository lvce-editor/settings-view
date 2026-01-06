import { test, expect } from '@jest/globals'
import * as GetName from '../src/parts/GetName/GetName.ts'

test('getName returns Settings', () => {
  const result: string = GetName.getName()
  expect(result).toBe('Settings')
})
