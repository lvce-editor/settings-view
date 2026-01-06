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

.CheckBox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
}

.CheckBoxBox {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid currentColor;
  position: relative;
  vertical-align: middle;
  margin-right: 8px;
  cursor: pointer;
}

.CheckBoxCheckmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  line-height: 1;
}
`
}
