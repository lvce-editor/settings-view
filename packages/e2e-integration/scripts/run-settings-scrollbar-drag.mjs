import { createRequire } from 'node:module'
import { resolve, join } from 'node:path'

if (!process.argv[2]) throw new Error('Pass the disposable LVCE checkout path')
const application = resolve(process.argv[2])

const appRequire = createRequire(join(application, 'packages/extension-host-worker-tests/package.json'))
const { chromium, expect } = appRequire('@playwright/test')
const express = appRequire('express')
const cors = appRequire('cors')

const staticPath = join(application, 'packages/build/.tmp/export-test/dist')
const app = express()
app.use(cors({}))
app.use(express.static(staticPath, { immutable: true, maxAge: 86400 }))

const server = app.listen(3000, 'localhost')
let browser
try {
  await new Promise((resolveListen, reject) => {
    server.once('listening', resolveListen)
    server.once('error', reject)
  })
  browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/tests/viewlet.settings-scrollbar-drag.html')

  const scrollBar = page.locator('.SettingsContent .ScrollBar')
  const thumb = page.locator('.SettingsContent .ScrollBarThumb')
  const firstItem = page.locator('.SettingsContent .SettingsItem').first()
  await expect(scrollBar).toBeVisible()
  await expect(firstItem).toBeVisible()
  const firstItemBefore = await firstItem.getAttribute('name')
  if (!firstItemBefore) throw new Error('Expected the first settings item to have a name')

  const trackBox = await scrollBar.boundingBox()
  const thumbBox = await thumb.boundingBox()
  if (!trackBox || !thumbBox) throw new Error('Expected the settings scrollbar track and thumb to have visible bounds')

  await page.mouse.move(thumbBox.x + thumbBox.width / 2, thumbBox.y + thumbBox.height / 2)
  await page.mouse.down()
  try {
    await page.mouse.move(trackBox.x - 50, trackBox.y + trackBox.height - 1, { steps: 8 })
  } finally {
    await page.mouse.up()
  }
  await expect(firstItem).not.toHaveAttribute('name', firstItemBefore)

  const firstItemAfterRelease = await firstItem.getAttribute('name')
  await page.mouse.move(trackBox.x - 50, trackBox.y + 1)
  await expect(firstItem).toHaveAttribute('name', firstItemAfterRelease)

  const bottomThumbBox = await thumb.boundingBox()
  if (!bottomThumbBox) throw new Error('Expected the settings scrollbar thumb to remain visible after dragging')
  await page.mouse.move(bottomThumbBox.x + bottomThumbBox.width / 2, bottomThumbBox.y + bottomThumbBox.height / 2)
  await page.mouse.down()
  try {
    await page.mouse.move(trackBox.x + trackBox.width / 2, trackBox.y + 1, { steps: 8 })
  } finally {
    await page.mouse.up()
  }
  await expect(firstItem).toHaveAttribute('name', firstItemBefore)
} finally {
  await browser?.close()
  await new Promise((resolveClose, reject) => {
    server.close((error) => (error ? reject(error) : resolveClose(undefined)))
  })
}
