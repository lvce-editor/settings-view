// The worker receives the height of the complete settings view. Account for
// the search header, content padding, and content heading before measuring rows.
const settingsContentChromeHeight = 114

export const getSettingsViewportHeight = (height: number): number => {
  return Math.max(0, height - settingsContentChromeHeight)
}
