import { test, expect } from '@jest/globals'
import { initialize } from '../src/parts/Initialize/Initialize.ts'

test('initialize function should resolve without error', async () => {
  await expect(initialize()).resolves.toBeUndefined()
})
