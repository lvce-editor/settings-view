export const getCss = (sideBarWidth: number): string => {
  return `
.Settings {
  --SettingsSideBarWidth: ${sideBarWidth}px;
}
.SettingsResizer {
  color: yellow;
}
`
}
