import { cp, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { root } from './root.ts'

const sharedProcessPath = join(root, 'node_modules', '@lvce-editor', 'shared-process', 'index.js')

const sharedProcessUrl = pathToFileURL(sharedProcessPath).toString()

const sharedProcess = await import(sharedProcessUrl)

process.env.PATH_PREFIX = '/settings-view'
const { commitHash } = await sharedProcess.exportStatic({
  root,
  extensionPath: '',
})

const rendererWorkerPath = join(root, 'dist', commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

export const getRemoteUrl = (path: string): string => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const content = await readFile(rendererWorkerPath, 'utf8')
const workerPath = join(root, '.tmp/dist/dist/settingsViewWorkerMain.js')
const remoteUrl = getRemoteUrl(workerPath)

const occurrence = `settingsViewWorkerUrl = ${JSON.stringify(remoteUrl)};`
const replacement = 'settingsViewWorkerUrl = `${assetDir}/packages/settings-view/dist/settingsViewWorkerMain.js`;'
if (content.split(occurrence).length !== 2) {
  throw new Error('Expected exactly one development settings worker URL')
}
const newContent = content.replace(occurrence, replacement)
await writeFile(rendererWorkerPath, newContent)

await cp(workerPath, join(root, 'dist', commitHash, 'packages', 'settings-view', 'dist', 'settingsViewWorkerMain.js'))

await cp(join(root, 'dist'), join(root, '.tmp', 'static'), { recursive: true })
