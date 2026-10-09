const original = `settingsViewWorkerUrl = getRuntimeWorkerUrl(
      "develop.settingsViewWorkerPath",
      \`\${assetDir}/packages/renderer-worker/node_modules/@lvce-editor/settings-view/dist/settingsViewWorkerMain.js\`
    );`

export const replaceSettingsWorkerUrl = (content, urlExpression) => {
  const replacement = `settingsViewWorkerUrl = ${urlExpression};`
  if (content.includes(replacement)) return content
  if (content.split(original).length !== 2) {
    throw new Error('Expected exactly one settings worker URL initializer')
  }
  return content.replace(original, replacement)
}
