export const getCss = (sideBarWidth: number, scrollBarThumbHeight: number, scrollBarThumbTop: number): string => {
  const rounded = Math.round(sideBarWidth)
  return `
.Settings {
  --SettingsSideBarWidth: ${rounded}px;
  --ScrollBarThumbHeight: ${scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${scrollBarThumbTop}px;
}
.SettingsResizer {
  background: yellow;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`
}
