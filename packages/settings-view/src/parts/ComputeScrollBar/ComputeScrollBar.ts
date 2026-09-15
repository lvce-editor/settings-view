export interface ScrollBarMetrics {
  readonly thumbHeight: number
  readonly thumbTop: number
}

export const computeScrollBar = (
  height: number,
  totalItemCount: number,
  itemHeight: number,
  scrollOffset: number,
  scrollBarMinHeight: number,
): ScrollBarMetrics => {
  const safeHeight = Math.max(0, height)
  const safeItemHeight = Math.max(0, itemHeight)
  const totalHeight = totalItemCount * safeItemHeight
  const scrollable = Math.max(0, totalHeight - safeHeight)
  const thumbTrack = safeHeight
  const proportionalThumbHeight = totalHeight > 0 ? Math.floor((safeHeight / Math.max(totalHeight, 1)) * safeHeight) : safeHeight
  const thumbHeight = totalHeight > 0 ? Math.min(safeHeight, Math.max(scrollBarMinHeight, proportionalThumbHeight)) : safeHeight
  const thumbMaxTop = Math.max(0, thumbTrack - thumbHeight)
  const thumbTop = scrollable > 0 ? Math.min(thumbMaxTop, Math.floor((scrollOffset / scrollable) * thumbMaxTop)) : 0
  return {
    thumbHeight,
    thumbTop,
  }
}
