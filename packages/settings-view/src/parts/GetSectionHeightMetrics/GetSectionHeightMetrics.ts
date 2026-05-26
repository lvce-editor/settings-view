import type { SectionHeightMetrics } from '../SectionHeightMetrics/SectionHeightMetrics.ts'
import type { SettingsState } from '../SettingsState/SettingsState.ts'

export const getSectionHeightMetrics = (state: SettingsState): SectionHeightMetrics => {
  return {
    checkBoxHeight: state.checkBoxHeight,
    headingFontSize: state.headingFontSize,
    headingPaddingBottom: state.headingPaddingBottom,
    headingPaddingTop: state.headingPaddingTop,
    inputBoxHeight: state.inputBoxHeight,
    labelFontSize: state.labelFontSize,
    selectHeight: state.selectHeight,
  }
}
