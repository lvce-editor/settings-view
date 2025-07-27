import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 490_000

export const instantiations = 2_000

export const instantiationsPath = join(root, 'packages', 'settings-view')

export const workerPath = join(root, '.tmp/dist/dist/settingsViewWorkerMain.js')

export const playwrightPath = new URL('../../e2e/node_modules/playwright/index.mjs', import.meta.url).toString()
