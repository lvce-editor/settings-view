export interface ScrollBarMetrics {
  readonly thumbHeight: number
  readonly thumbTop: number
}

export const computeScrollBar = (
  height: number,
  totalHeightOrItemCount: number,
  itemHeightOrScrollOffset: number,
  scrollOffsetOrScrollBarMinHeight: number,
  scrollBarMinHeight?: number,
): ScrollBarMetrics => {
  const totalHeight = typeof scrollBarMinHeight === 'number' ? totalHeightOrItemCount * itemHeightOrScrollOffset : totalHeightOrItemCount
  const scrollOffset = typeof scrollBarMinHeight === 'number' ? scrollOffsetOrScrollBarMinHeight : itemHeightOrScrollOffset
  const minThumbHeight = typeof scrollBarMinHeight === 'number' ? scrollBarMinHeight : scrollOffsetOrScrollBarMinHeight
  const scrollable = Math.max(0, totalHeight - height)
  const thumbTrack = Math.max(0, height)
  const thumbHeight = totalHeight > 0 ? Math.max(minThumbHeight, Math.floor((height / Math.max(totalHeight, 1)) * height)) : height
  const thumbMaxTop = Math.max(0, thumbTrack - thumbHeight)
  const thumbTop = scrollable > 0 ? Math.min(thumbMaxTop, Math.floor((scrollOffset / scrollable) * thumbMaxTop)) : 0
  return {
    thumbHeight,
    thumbTop,
  }
}
