import { createRequire } from 'node:module'
import { resolve, join } from 'node:path'

if (!process.argv[2]) throw new Error('Pass the disposable LVCE checkout path')
const application = resolve(process.argv[2])

const appRequire = createRequire(join(application, 'packages/extension-host-worker-tests/package.json'))
const { chromium, expect } = appRequire('@playwright/test')
const express = appRequire('express')
const cors = appRequire('cors')

const staticPath = join(application, 'packages/build/.tmp/dist')
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
  page.on('console', (message) => {
    if (message.text().includes('[DEBUG-settings-drag]')) console.info(message.text())
  })
  await page.goto('http://localhost:3000/tests/viewlet.settings-scrollbar-drag.html')

  const scrollBar = page.locator('.SettingsContent .ScrollBar')
  const thumb = page.locator('.SettingsContent .ScrollBarThumb')
  const firstItem = page.locator('.SettingsContent .SettingsItem').first()
  await expect(scrollBar).toBeVisible()
  await expect(firstItem).toBeVisible()
  const firstItemBefore = await firstItem.innerText()
  if (!firstItemBefore) throw new Error('Expected the first settings item to have a name')

  const trackBox = await scrollBar.boundingBox()
  const thumbBox = await thumb.boundingBox()
  if (!trackBox || !thumbBox) throw new Error('Expected the settings scrollbar track and thumb to have visible bounds')
  const getMetrics = async () => ({
    settings: await page.locator('.Settings').first().boundingBox(),
    track: await scrollBar.boundingBox(),
    thumb: await thumb.boundingBox(),
    firstItem: await firstItem.innerText(),
    thumbTop: await page
      .locator('.Settings')
      .first()
      .evaluate((element) => getComputedStyle(element).getPropertyValue('--ScrollBarThumbTop')),
    itemsTranslateY: await page
      .locator('.Settings')
      .first()
      .evaluate((element) => getComputedStyle(element).getPropertyValue('--SettingsItemsTranslateY')),
  })
  console.info('scrollbar before drag', JSON.stringify(await getMetrics()))

  await page.mouse.move(thumbBox.x + thumbBox.width / 2, thumbBox.y + thumbBox.height / 2)
  await page.mouse.down()
  try {
    await page.mouse.move(trackBox.x - 50, trackBox.y + trackBox.height - 1, { steps: 8 })
  } finally {
    await page.mouse.up()
  }
  console.info('scrollbar after bottom drag', JSON.stringify(await getMetrics()))
  await expect.poll(() => firstItem.innerText()).not.toBe(firstItemBefore)
  await expect
    .poll(async () => {
      const currentThumbBox = await thumb.boundingBox()
      if (!currentThumbBox) return Number.POSITIVE_INFINITY
      return Math.round(Math.abs(trackBox.y + trackBox.height - (currentThumbBox.y + currentThumbBox.height)))
    })
    .toBeLessThanOrEqual(1)

  const firstItemAfterRelease = await firstItem.innerText()
  await page.mouse.move(trackBox.x - 50, trackBox.y + 1)
  await expect.poll(() => firstItem.innerText()).toBe(firstItemAfterRelease)

  const bottomThumbBox = await thumb.boundingBox()
  if (!bottomThumbBox) throw new Error('Expected the settings scrollbar thumb to remain visible after dragging')
  await page.mouse.move(bottomThumbBox.x + bottomThumbBox.width / 2, bottomThumbBox.y + bottomThumbBox.height / 2)
  await page.mouse.down()
  try {
    await page.mouse.move(trackBox.x + trackBox.width / 2, trackBox.y + 1, { steps: 8 })
  } finally {
    await page.mouse.up()
  }
  console.info('scrollbar after top drag', JSON.stringify(await getMetrics()))
  await expect
    .poll(async () => {
      const currentThumbBox = await thumb.boundingBox()
      if (!currentThumbBox) return Number.POSITIVE_INFINITY
      return Math.round(Math.abs(currentThumbBox.y - trackBox.y))
    })
    .toBeLessThanOrEqual(1)
  await expect.poll(() => firstItem.innerText()).toBe(firstItemBefore)
} finally {
  await browser?.close()
  await new Promise((resolveClose, reject) => {
    server.close((error) => (error ? reject(error) : resolveClose(undefined)))
  })
}
