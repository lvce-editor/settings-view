import assert from 'node:assert/strict'
import { test } from 'node:test'
import { replaceSettingsWorkerUrl } from '../src/replaceSettingsWorkerUrl.js'

const initializer = `settingsViewWorkerUrl = getRuntimeWorkerUrl(
      "develop.settingsViewWorkerPath",
      \`\${assetDir}/packages/renderer-worker/node_modules/@lvce-editor/settings-view/dist/settingsViewWorkerMain.js\`
    );`

test('routes the settings worker to the owned bundle and preserves other code', () => {
  const source = `before\n${initializer}\nafter`
  const expression = JSON.stringify('/remote/task/settingsViewWorkerMain.js')
  const patched = replaceSettingsWorkerUrl(source, expression)
  assert.equal(patched, `before\nsettingsViewWorkerUrl = ${expression};\nafter`)
  assert.equal(replaceSettingsWorkerUrl(patched, expression), patched)
})

test('rejects absent, changed, or duplicate runtime initializers', () => {
  for (const source of ['', initializer.replace('develop.settingsViewWorkerPath', 'develop.otherWorkerPath'), initializer + initializer]) {
    assert.throws(() => replaceSettingsWorkerUrl(source, '"/remote/worker.js"'), /Expected exactly one/)
  }
})
