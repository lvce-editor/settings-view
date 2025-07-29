import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 520_000

export const instantiations = 1600

export const instantiationsPath = join(root, 'packages', 'settings-view')

export const workerPath = join(root, '.tmp/dist/dist/settingsViewWorkerMain.js')

export const playwrightPath = new URL('../../e2e/node_modules/playwright/index.mjs', import.meta.url).toString()
