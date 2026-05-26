import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'settings.checkbox'

export const test: Test = async ({ Command, expect, Locator, SettingsView }) => {
  // arrange
  await SettingsView.show()

  // act - navigate to a tab that has checkbox settings
  await Command.execute('Settings.handleClickTab', 'features')

  // assert - find a checkbox setting (autoSave should be checked, formatOnSave should be unchecked)
  const checkboxInput = Locator('input.CheckBox[type="checkbox"]').first()
  await expect(checkboxInput).toBeVisible()

  // Verify aria attributes on the native input
  const isChecked = await checkboxInput.getAttribute('aria-checked')
  expect(isChecked).toBeTruthy()
  await expect(checkboxInput).toHaveAttribute('aria-checked', isChecked === 'true' ? 'true' : 'false')

  // Verify the custom checkbox box exists and has proper aria attributes
  const checkboxBox = Locator('.CheckBoxBox').first()
  await expect(checkboxBox).toBeVisible()
  await expect(checkboxBox).toHaveAttribute('role', 'checkbox')
  await expect(checkboxBox).toHaveAttribute('aria-checked', isChecked === 'true' ? 'true' : 'false')
  await expect(checkboxBox).toHaveAttribute('aria-labelledby')

  // Verify checkmark appears when checked
  if (isChecked === 'true') {
    const checkmark = checkboxBox.locator('.CheckBoxCheckmark')
    await expect(checkmark).toBeVisible()
    await expect(checkmark).toHaveText('✓')
  } else {
    const checkmark = checkboxBox.locator('.CheckBoxCheckmark')
    await expect(checkmark).not.toBeVisible()
  }

  // Act - click the custom checkbox box to toggle it
  const initialChecked = isChecked === 'true'
  await checkboxBox.click()

  // Wait a bit for the state to update
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Assert - verify the state changed
  const newChecked = await checkboxInput.getAttribute('aria-checked')
  expect(newChecked).toBe(initialChecked ? 'false' : 'true')

  // Verify the custom checkbox box aria-checked updated
  await expect(checkboxBox).toHaveAttribute('aria-checked', newChecked === 'true' ? 'true' : 'false')

  // Verify checkmark appears/disappears based on state
  const checkmark = checkboxBox.locator('.CheckBoxCheckmark')
  if (newChecked === 'true') {
    await expect(checkmark).toBeVisible()
    await expect(checkmark).toHaveText('✓')
  } else {
    await expect(checkmark).not.toBeVisible()
  }
}
