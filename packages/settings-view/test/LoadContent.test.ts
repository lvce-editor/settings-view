import { beforeEach, expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker, SettingsWorker } from '@lvce-editor/rpc-registry'
import type { SettingsState } from '../src/parts/SettingsState/SettingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { Script } from '../src/parts/InputSource/InputSource.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

const items = [
  {
    category: 'Text Editor',
    description: 'Controls the font size in pixels.',
    heading: 'Font Size',
    id: 'editor.fontSize',
    type: 2,
    validationId: 1,
    value: 15,
  },
  {
    category: 'Text Editor',
    description: 'Controls how lines should wrap.',
    heading: 'Word Wrap',
    id: 'editor.wordWrap',
    type: 3,
    validationId: 2,
    value: 'off',
  },
]

const tabs = [
  { id: 'text-editor', label: 'Text Editor', selected: true },
  { id: 'workbench', label: 'Workbench', selected: false },
  { id: 'window', label: 'Window', selected: false },
  { id: 'features', label: 'Features', selected: false },
  { id: 'applications', label: 'Applications', selected: false },
  { id: 'security', label: 'Security', selected: false },
  { id: 'extensions', label: 'Extensions', selected: false },
]

beforeEach(() => {
  SettingsWorker.set(
    MockRpc.create({
      commandMap: {},
      invoke(method: string) {
        if (method === 'SettingsWorker.getSettingsItems2') {
          return items
        }
        if (method === 'SettingsWorker.getTabs') {
          return tabs
        }
        throw new Error(`unexpected method ${method}`)
      },
    }),
  )
})

test('loadContent should return state with tabs loaded when savedState is null', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result.inputSource).toBe(Script)
  expect(result.tabs).toEqual([
    { id: 'text-editor', label: 'Text Editor', selected: false },
    { id: 'workbench', label: 'Workbench', selected: false },
    { id: 'window', label: 'Window', selected: false },
    { id: 'features', label: 'Features', selected: false },
    { id: 'applications', label: 'Applications', selected: false },
    { id: 'security', label: 'Security', selected: false },
    { id: 'extensions', label: 'Extensions', selected: false },
  ])
  expect(result.items).toBeDefined()
  expect(Array.isArray(result.items)).toBe(true)
  expect(result.items.length).toBeGreaterThan(0)
  expect(result.filteredItems).toBeDefined()
  expect(Array.isArray(result.filteredItems)).toBe(true)
  expect(result.searchValue).toBe('')
  expect(result.scrollOffset).toBe(0)
  expect(result.history).toEqual([])
  expect(result.historyIndex).toBe(-1)
})

test('loadContent should preserve other state properties', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    breakPointsVisible: false,
    focus: 5,
    height: 800,
    id: 123,
    uri: 'test://custom-uri',
    width: 1200,
    x: 100,
    y: 200,
  }
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result.breakPointsExpanded).toBe(true)
  expect(result.breakPointsVisible).toBe(false)
  expect(result.focus).toBe(5)
  expect(result.id).toBe(123)
  expect(result.uri).toBe('test://custom-uri')
  expect(result.x).toBe(100)
  expect(result.y).toBe(200)
  expect(result.width).toBe(1200)
  expect(result.height).toBe(800)
})

test('loadContent should restore tabId from savedState', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = {
    selectedTab: 'workbench',
  }

  const result = await loadContent(initialState, savedState)

  expect(result.tabs.find((tab) => tab.id === 'workbench')?.selected).toBe(true)
  expect(result.tabs.filter((tab) => tab.id !== 'workbench').every((tab) => !tab.selected)).toBe(true)
})

test('loadContent should restore searchValue from savedState', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = {
    searchValue: 'font',
  }

  const result = await loadContent(initialState, savedState)

  expect(result.searchValue).toBe('font')
})

test('loadContent should restore scrollOffset from savedState', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = {
    scrollOffset: 500,
  }

  const result = await loadContent(initialState, savedState)

  expect(result.scrollOffset).toBe(500)
})

test('loadContent should restore history from savedState', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = {
    history: ['search1', 'search2', 'search3'],
    historyIndex: 1,
  }

  const result = await loadContent(initialState, savedState)

  expect(result.history).toEqual(['search1', 'search2', 'search3'])
  expect(result.historyIndex).toBe(1)
})

test('loadContent should compute visibleItems based on scrollOffset and height', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = {
    ...createDefaultState(),
    height: 600,
    itemHeight: 100,
    scrollOffset: 200,
  }
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result.visibleItems).toBeDefined()
  expect(Array.isArray(result.visibleItems)).toBe(true)
  expect(result.minLineY).toBeGreaterThanOrEqual(0)
  expect(result.maxLineY).toBeGreaterThanOrEqual(result.minLineY)
})

test('loadContent should compute scrollBar metrics', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = {
    ...createDefaultState(),
    height: 600,
    itemHeight: 100,
    scrollBarMinHeight: 20,
    scrollOffset: 0,
  }
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result.scrollBarThumbHeight).toBeGreaterThanOrEqual(0)
  expect(result.scrollBarThumbTop).toBeGreaterThanOrEqual(0)
})

test('loadContent should use preferences from RendererWorker', async () => {
  const preferences = {
    'editor.fontSize': 18,
    'editor.wordWrap': 'on',
  }
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method.includes('getAllPreferences') || method.includes('Preferences')) {
        return preferences
      }
      return {}
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result.preferences).toEqual(preferences)
  expect(result.modifiedSettings).toEqual({
    'editor.fontSize': true,
    'editor.wordWrap': true,
  })
})

test('loadContent should load setting items and preferences in parallel', async () => {
  const events: string[] = []
  const { promise: itemsCanFinish, resolve: resolveItems } = Promise.withResolvers<void>()
  SettingsWorker.set(
    MockRpc.create({
      commandMap: {},
      async invoke(method: string) {
        if (method === 'SettingsWorker.getSettingsItems2') {
          events.push('items-started')
          await itemsCanFinish
          events.push('items-finished')
          return items
        }
        if (method === 'SettingsWorker.getTabs') {
          return tabs
        }
        throw new Error(`unexpected method ${method}`)
      },
    }),
  )
  RendererWorker.set(
    MockRpc.create({
      commandMap: {},
      invoke(method: string) {
        if (method === 'Preferences.getAll') {
          events.push('preferences-started')
          resolveItems()
          return {}
        }
        throw new Error(`unexpected method ${method}`)
      },
    }),
  )

  await loadContent(createDefaultState(), null)

  expect(events).toEqual(['items-started', 'preferences-started', 'items-finished'])
})

test('loadContent should handle empty preferences', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result.preferences).toEqual({})
  expect(result.modifiedSettings).toEqual({})
})

test('loadContent should filter items based on searchValue and tabId', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        return {}
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = {
    searchValue: 'font',
    tabId: 'text-editor',
  }

  const result = await loadContent(initialState, savedState)

  expect(result.filteredItems.length).toBeGreaterThan(0)
  expect(result.filteredItems.every((item) => item.heading.toLowerCase().includes('font') || item.description.toLowerCase().includes('font'))).toBe(
    true,
  )
})

test('loadContent should handle RPC error and return empty preferences', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'getAllPreferences') {
        throw new Error('RPC error')
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const initialState: SettingsState = createDefaultState()
  const savedState = null

  const result = await loadContent(initialState, savedState)

  expect(result.preferences).toEqual({})
  expect(result.modifiedSettings).toEqual({})
})
