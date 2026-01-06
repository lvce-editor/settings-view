export const getCss = (sideBarWidth: number): string => {
  const rounded = Math.round(sideBarWidth)
  return `
.Settings {
  --SettingsSideBarWidth: ${rounded}px;
}
.SettingsResizer {
  background: yellow;
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}
`
}
