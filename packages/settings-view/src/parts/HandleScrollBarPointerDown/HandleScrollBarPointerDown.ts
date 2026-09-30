import type { SettingsState } from '../SettingsState/SettingsState.ts'
import { computeScrollBar } from '../ComputeScrollBar/ComputeScrollBar.ts'
import { getSettingsViewportHeight } from '../GetSettingsViewportHeight/GetSettingsViewportHeight.ts'
import { handleScrollBarPointerMove } from '../HandleScrollBarPointerMove/HandleScrollBarPointerMove.ts'

// Temporary browser-worker diagnostic; removed after the drag investigation.
declare const console: { warn(message: string, data: string): void }

export const handleScrollBarPointerDown = (state: SettingsState, clientY: number): SettingsState => {
  {
    const { height, scrollBarActive, scrollBarHandleOffset, scrollBarThumbTop, x, y } = state
    console.warn(
      '[DEBUG-settings-drag] HandleScrollBarPointerDown',
      JSON.stringify({ clientY, height, scrollBarActive, scrollBarHandleOffset, scrollBarThumbTop, x, y }),
    )
  }
  const { filteredItems, height, itemHeight, scrollBarMinHeight, scrollBarThumbHeight, scrollBarThumbTop, scrollOffset, y } = state
  const viewportHeight = getSettingsViewportHeight(height)
  const { thumbHeight, thumbTop } = computeScrollBar(viewportHeight, filteredItems.length, itemHeight, scrollOffset, scrollBarMinHeight)
  if (viewportHeight <= 0 || thumbHeight >= viewportHeight || filteredItems.length * itemHeight <= viewportHeight) {
    return state
  }

  const actualThumbHeight = scrollBarThumbHeight || thumbHeight
  const actualThumbTop = scrollBarThumbHeight ? scrollBarThumbTop : thumbTop
  const trackTop = y + height - viewportHeight
  const relativeY = clientY - trackTop
  const insideThumb = relativeY >= actualThumbTop && relativeY < actualThumbTop + actualThumbHeight
  const scrollBarHandleOffset = insideThumb ? relativeY - actualThumbTop : actualThumbHeight / 2
  return handleScrollBarPointerMove(
    {
      ...state,
      scrollBarActive: true,
      scrollBarHandleOffset,
    },
    clientY,
  )
}
