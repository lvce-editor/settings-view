import { expect, test } from '@jest/globals'
import { EventExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners returns array of DomEventListener objects', () => {
  const eventListeners = renderEventListeners()
  expect(eventListeners).toBeDefined()
  expect(eventListeners).toContainEqual({
    name: DomEventListenerFunctions.HandleContextMenu,
    params: ['handleContextMenu', EventExpression.TargetName, EventExpression.ClientX, EventExpression.ClientY],
    preventDefault: true,
  })
})
