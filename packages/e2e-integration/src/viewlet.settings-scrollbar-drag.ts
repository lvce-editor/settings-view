import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.settings-scrollbar-drag'

export const test: Test = async ({ expect, Locator, page, SettingsView }) => {
  await SettingsView.show()

  const scrollbar = Locator('.SettingsContent .ScrollBar')
  const thumb = Locator('.SettingsContent .ScrollBarThumb')
  await expect(scrollbar).toBeVisible()
  const firstItem = Locator('.SettingsContent .SettingsItem').first()
  const firstItemBefore = await firstItem.getAttribute('name')
  const scrollbarBox = await scrollbar.boundingBox()
  const thumbBox = await thumb.boundingBox()
  if (!scrollbarBox || !thumbBox) {
    throw new Error('Settings scrollbar or thumb has no visible bounds')
  }

  await page.mouse.move(thumbBox.x + thumbBox.width / 2, thumbBox.y + thumbBox.height / 2)
  await page.mouse.down()
  try {
    await page.mouse.move(scrollbarBox.x + scrollbarBox.width / 2, scrollbarBox.y + scrollbarBox.height - 1, { steps: 8 })
  } finally {
    await page.mouse.up()
  }

  await expect(firstItem).not.toHaveAttribute('name', firstItemBefore)
}
