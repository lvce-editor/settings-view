import { beforeEach, expect, test } from '@jest/globals'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { commandMap } from '../src/parts/CommandMap/CommandMap.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { diff2 } from '../src/parts/Diff2/Diff2.ts'
import * as SettingsStates from '../src/parts/SettingsStates/SettingsStates.ts'

const uid = 42

beforeEach(() => {
  const state = { ...createDefaultState(), id: uid }
  SettingsStates.set(uid, state, state)
})

test('gets the current worker state instead of the last rendered state', () => {
  const { oldState } = SettingsStates.get(uid)
  const newState = { ...oldState, searchValue: 'current search' }
  SettingsStates.set(uid, oldState, newState)

  expect(commandMap['Settings.getComponentState'](uid)).toEqual(newState)
})

test('sets the full component state and makes it available for rendering', async () => {
  const { oldState } = SettingsStates.get(uid)
  const newState = { ...oldState, searchValue: 'live search' }

  await commandMap['Settings.setComponentState'](uid, newState)

  expect(SettingsStates.get(uid)).toMatchObject({ newState, oldState })
  expect(commandMap['Settings.getComponentState'](uid)).toEqual(newState)
  expect(diff2(uid)).toContain(3)
})

test.each([null, [], 'invalid', 1])('rejects invalid component state %p without changing state', async (value: unknown) => {
  const before = SettingsStates.get(uid)

  await expect(commandMap['Settings.setComponentState'](uid, value as SettingsState)).rejects.toThrow('Settings state must be an object')

  expect(SettingsStates.get(uid)).toEqual(before)
})

test('rejects a changed component id without changing state', async () => {
  const before = SettingsStates.get(uid)

  await expect(commandMap['Settings.setComponentState'](uid, { ...before.newState, id: 43 })).rejects.toThrow('Settings state id must remain 42')

  expect(SettingsStates.get(uid)).toEqual(before)
})
