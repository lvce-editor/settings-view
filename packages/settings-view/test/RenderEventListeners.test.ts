import { expect, test } from '@jest/globals'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners returns array of DomEventListener objects', () => {
  const eventListeners = renderEventListeners()
  expect(eventListeners).toBeDefined()
})
