import type { VisibleSection } from '../VisibleSection/VisibleSection.ts'

const getSectionHeightVariable = (section: VisibleSection): string => {
  return `  --SectionHeight-${section.index + 1}: ${section.height}px;`
}

const getSectionHeightRule = (section: VisibleSection): string => {
  return `.${section.className} {
  height: var(--SectionHeight-${section.index + 1});
}`
}

export const getCss = (
  sideBarWidth: number,
  scrollBarThumbHeight: number,
  scrollBarThumbTop: number,
  visibleSections: readonly VisibleSection[],
): string => {
  const rounded = Math.round(sideBarWidth)
  const sectionVariables = visibleSections.map(getSectionHeightVariable).join('\n')
  const sectionRules = visibleSections.map(getSectionHeightRule).join('\n\n')
  const sectionVariableBlock = sectionVariables ? `\n${sectionVariables}` : ''
  const sectionRuleBlock = sectionRules ? `\n\n${sectionRules}` : ''
  return `
.Settings {
  --SettingsSideBarWidth: ${rounded}px;
  --ScrollBarThumbHeight: ${scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${scrollBarThumbTop}px;${sectionVariableBlock}
}

.SettingsSideBar{
  width: var(--SettingsSideBarWidth);
}${sectionRuleBlock}
`
}
