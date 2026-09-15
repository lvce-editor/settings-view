export const getCss = (
  sideBarWidth: number,
  scrollBarThumbHeight: number,
  scrollBarThumbTop: number,
  itemHeight?: number,
  totalItemCount?: number,
  scrollOffset?: number,
): string => {
  const rounded = Math.round(sideBarWidth)
  const settingsLayoutCss =
    typeof itemHeight === 'number' && typeof totalItemCount === 'number' && typeof scrollOffset === 'number'
      ? `
  --SettingsItemHeight: ${itemHeight}px;
  --SettingsItemsHeight: ${itemHeight * totalItemCount}px;
  --SettingsItemsTranslateY: ${-scrollOffset}px;`
      : ''
  return `
.Settings {
  --SettingsSideBarWidth: ${rounded}px;
  --ScrollBarThumbHeight: ${scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${scrollBarThumbTop}px;${settingsLayoutCss}
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`
}
