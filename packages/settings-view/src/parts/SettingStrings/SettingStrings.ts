import * as I18NString from '../I18NString/I18NString.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'

export const addWatchExpression = (): string => {
  return I18NString.i18nString(UiStrings.AddWatchExpression)
}

export const autoSave = (): string => {
  return I18NString.i18nString(UiStrings.AutoSave)
}

export const autoSaveDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoSaveDescription)
}

export const autoUpdateExtensions = (): string => {
  return I18NString.i18nString(UiStrings.AutoUpdateExtensions)
}

export const autoUpdateExtensionsDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoUpdateExtensionsDescription)
}

export const autoUpdates = (): string => {
  return I18NString.i18nString(UiStrings.AutoUpdates)
}

export const autoUpdatesDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoUpdatesDescription)
}

export const clear = (): string => {
  return I18NString.i18nString(UiStrings.Clear)
}

export const filter = (): string => {
  return 'Filter'
}

export const extensionRecommendations = (): string => {
  return I18NString.i18nString(UiStrings.ExtensionRecommendations)
}

export const extensionRecommendationsDescription = (): string => {
  return I18NString.i18nString(UiStrings.ExtensionRecommendationsDescription)
}

export const fileEncryption = (): string => {
  return I18NString.i18nString(UiStrings.FileEncryption)
}

export const fileEncryptionDescription = (): string => {
  return I18NString.i18nString(UiStrings.FileEncryptionDescription)
}

export const fontFamily = (): string => {
  return I18NString.i18nString(UiStrings.FontFamily)
}

export const fontFamilyDescription = (): string => {
  return I18NString.i18nString(UiStrings.FontFamilyDescription)
}

export const fontSize = (): string => {
  return I18NString.i18nString(UiStrings.FontSize)
}

export const fontSizeDescription = (): string => {
  return I18NString.i18nString(UiStrings.FontSizeDescription)
}

export const formatOnSave = (): string => {
  return I18NString.i18nString(UiStrings.FormatOnSave)
}

export const formatOnSaveDescription = (): string => {
  return I18NString.i18nString(UiStrings.FormatOnSaveDescription)
}

export const numberValue = (): string => {
  return I18NString.i18nString(UiStrings.NumberValue)
}

export const urlValue = (): string => {
  return I18NString.i18nString(UiStrings.UrlValue)
}

export const colorValue = (): string => {
  return I18NString.i18nString(UiStrings.ColorValue)
}

export const stringValue = (): string => {
  return I18NString.i18nString(UiStrings.StringValue)
}

export const refreshWatchExpressions = (): string => {
  return I18NString.i18nString(UiStrings.RefreshWatchExpressions)
}

export const searchSettings = (): string => {
  return I18NString.i18nString(UiStrings.SearchSettings)
}

export const settingsContent = (): string => {
  return I18NString.i18nString(UiStrings.SettingsContent)
}

export const settingsSideBar = (): string => {
  return I18NString.i18nString(UiStrings.SettingsSideBar)
}

export const sidebarPosition = (): string => {
  return I18NString.i18nString(UiStrings.SidebarPosition)
}

export const sidebarPositionDescription = (): string => {
  return I18NString.i18nString(UiStrings.SidebarPositionDescription)
}

export const telemetry = (): string => {
  return I18NString.i18nString(UiStrings.Telemetry)
}

export const telemetryDescription = (): string => {
  return I18NString.i18nString(UiStrings.TelemetryDescription)
}

export const theme = (): string => {
  return I18NString.i18nString(UiStrings.Theme)
}

export const themeDescription = (): string => {
  return I18NString.i18nString(UiStrings.ThemeDescription)
}

export const twoFactorAuth = (): string => {
  return I18NString.i18nString(UiStrings.TwoFactorAuth)
}

export const twoFactorAuthDescription = (): string => {
  return I18NString.i18nString(UiStrings.TwoFactorAuthDescription)
}

export const windowSize = (): string => {
  return I18NString.i18nString(UiStrings.WindowSize)
}

export const windowTitleBarStyle = (): string => {
  return I18NString.i18nString(UiStrings.WindowTitleBarStyle)
}

export const windowSizeDescription = (): string => {
  return I18NString.i18nString(UiStrings.WindowSizeDescription)
}

export const windowTitleBarStyleDescription = (): string => {
  return I18NString.i18nString(UiStrings.WindowTitleBarStyleDescription)
}

export const windowTitle = (): string => {
  return I18NString.i18nString(UiStrings.WindowTitle)
}

export const windowTitleDescription = (): string => {
  return I18NString.i18nString(UiStrings.WindowTitleDescription)
}

export const noSettingsMatching = (searchTerm: string): string => {
  return I18NString.i18nString(UiStrings.NoSettingsMatching, { PH1: searchTerm })
}

export const matchingSettings = (count: number): string => {
  return I18NString.i18nString(UiStrings.MatchingSettings, { PH1: count.toString() })
}

// Text Editor Settings
export const wordWrap = (): string => {
  return I18NString.i18nString(UiStrings.WordWrap)
}

export const wordWrapDescription = (): string => {
  return I18NString.i18nString(UiStrings.WordWrapDescription)
}

export const lineNumbers = (): string => {
  return I18NString.i18nString(UiStrings.LineNumbers)
}

export const lineNumbersDescription = (): string => {
  return I18NString.i18nString(UiStrings.LineNumbersDescription)
}

export const minimap = (): string => {
  return I18NString.i18nString(UiStrings.Minimap)
}

export const minimapDescription = (): string => {
  return I18NString.i18nString(UiStrings.MinimapDescription)
}

export const scrollBeyondLastLine = (): string => {
  return I18NString.i18nString(UiStrings.ScrollBeyondLastLine)
}

export const scrollBeyondLastLineDescription = (): string => {
  return I18NString.i18nString(UiStrings.ScrollBeyondLastLineDescription)
}

export const smoothScrolling = (): string => {
  return I18NString.i18nString(UiStrings.SmoothScrolling)
}

export const smoothScrollingDescription = (): string => {
  return I18NString.i18nString(UiStrings.SmoothScrollingDescription)
}

export const cursorBlinking = (): string => {
  return I18NString.i18nString(UiStrings.CursorBlinking)
}

export const cursorBlinkingDescription = (): string => {
  return I18NString.i18nString(UiStrings.CursorBlinkingDescription)
}

export const cursorStyle = (): string => {
  return I18NString.i18nString(UiStrings.CursorStyle)
}

export const cursorStyleDescription = (): string => {
  return I18NString.i18nString(UiStrings.CursorStyleDescription)
}

export const cursorWidth = (): string => {
  return I18NString.i18nString(UiStrings.CursorWidth)
}

export const cursorWidthDescription = (): string => {
  return I18NString.i18nString(UiStrings.CursorWidthDescription)
}

export const tabSize = (): string => {
  return I18NString.i18nString(UiStrings.TabSize)
}

export const tabSizeDescription = (): string => {
  return I18NString.i18nString(UiStrings.TabSizeDescription)
}

export const insertSpaces = (): string => {
  return I18NString.i18nString(UiStrings.InsertSpaces)
}

export const insertSpacesDescription = (): string => {
  return I18NString.i18nString(UiStrings.InsertSpacesDescription)
}

export const detectIndentation = (): string => {
  return I18NString.i18nString(UiStrings.DetectIndentation)
}

export const detectIndentationDescription = (): string => {
  return I18NString.i18nString(UiStrings.DetectIndentationDescription)
}

export const trimAutoWhitespace = (): string => {
  return I18NString.i18nString(UiStrings.TrimAutoWhitespace)
}

export const trimAutoWhitespaceDescription = (): string => {
  return I18NString.i18nString(UiStrings.TrimAutoWhitespaceDescription)
}

export const largeFileOptimizations = (): string => {
  return I18NString.i18nString(UiStrings.LargeFileOptimizations)
}

export const largeFileOptimizationsDescription = (): string => {
  return I18NString.i18nString(UiStrings.LargeFileOptimizationsDescription)
}

export const renderWhitespace = (): string => {
  return I18NString.i18nString(UiStrings.RenderWhitespace)
}

export const renderWhitespaceDescription = (): string => {
  return I18NString.i18nString(UiStrings.RenderWhitespaceDescription)
}

export const renderControlCharacters = (): string => {
  return I18NString.i18nString(UiStrings.RenderControlCharacters)
}

export const renderControlCharactersDescription = (): string => {
  return I18NString.i18nString(UiStrings.RenderControlCharactersDescription)
}

export const renderLineHighlight = (): string => {
  return I18NString.i18nString(UiStrings.RenderLineHighlight)
}

export const renderLineHighlightDescription = (): string => {
  return I18NString.i18nString(UiStrings.RenderLineHighlightDescription)
}

export const codeLens = (): string => {
  return I18NString.i18nString(UiStrings.CodeLens)
}

export const codeLensDescription = (): string => {
  return I18NString.i18nString(UiStrings.CodeLensDescription)
}

export const folding = (): string => {
  return I18NString.i18nString(UiStrings.Folding)
}

export const foldingDescription = (): string => {
  return I18NString.i18nString(UiStrings.FoldingDescription)
}

export const showFoldingControls = (): string => {
  return I18NString.i18nString(UiStrings.ShowFoldingControls)
}

export const showFoldingControlsDescription = (): string => {
  return I18NString.i18nString(UiStrings.ShowFoldingControlsDescription)
}

export const unfoldOnClickAfterEnd = (): string => {
  return I18NString.i18nString(UiStrings.UnfoldOnClickAfterEnd)
}

export const unfoldOnClickAfterEndDescription = (): string => {
  return I18NString.i18nString(UiStrings.UnfoldOnClickAfterEndDescription)
}

export const links = (): string => {
  return I18NString.i18nString(UiStrings.Links)
}

export const linksDescription = (): string => {
  return I18NString.i18nString(UiStrings.LinksDescription)
}

export const colorDecorators = (): string => {
  return I18NString.i18nString(UiStrings.ColorDecorators)
}

export const colorDecoratorsDescription = (): string => {
  return I18NString.i18nString(UiStrings.ColorDecoratorsDescription)
}

export const lightbulb = (): string => {
  return I18NString.i18nString(UiStrings.Lightbulb)
}

export const lightbulbDescription = (): string => {
  return I18NString.i18nString(UiStrings.LightbulbDescription)
}

export const codeActionsOnSave = (): string => {
  return I18NString.i18nString(UiStrings.CodeActionsOnSave)
}

export const codeActionsOnSaveDescription = (): string => {
  return I18NString.i18nString(UiStrings.CodeActionsOnSaveDescription)
}

export const formatOnPaste = (): string => {
  return I18NString.i18nString(UiStrings.FormatOnPaste)
}

export const formatOnPasteDescription = (): string => {
  return I18NString.i18nString(UiStrings.FormatOnPasteDescription)
}

export const formatOnType = (): string => {
  return I18NString.i18nString(UiStrings.FormatOnType)
}

export const formatOnTypeDescription = (): string => {
  return I18NString.i18nString(UiStrings.FormatOnTypeDescription)
}

export const acceptSuggestionOnCommitCharacter = (): string => {
  return I18NString.i18nString(UiStrings.AcceptSuggestionOnCommitCharacter)
}

export const acceptSuggestionOnCommitCharacterDescription = (): string => {
  return I18NString.i18nString(UiStrings.AcceptSuggestionOnCommitCharacterDescription)
}

export const acceptSuggestionOnEnter = (): string => {
  return I18NString.i18nString(UiStrings.AcceptSuggestionOnEnter)
}

export const acceptSuggestionOnEnterDescription = (): string => {
  return I18NString.i18nString(UiStrings.AcceptSuggestionOnEnterDescription)
}

export const tabCompletion = (): string => {
  return I18NString.i18nString(UiStrings.TabCompletion)
}

export const tabCompletionDescription = (): string => {
  return I18NString.i18nString(UiStrings.TabCompletionDescription)
}

export const wordBasedSuggestions = (): string => {
  return I18NString.i18nString(UiStrings.WordBasedSuggestions)
}

export const wordBasedSuggestionsDescription = (): string => {
  return I18NString.i18nString(UiStrings.WordBasedSuggestionsDescription)
}

export const suggestOnTriggerCharacters = (): string => {
  return I18NString.i18nString(UiStrings.SuggestOnTriggerCharacters)
}

export const suggestOnTriggerCharactersDescription = (): string => {
  return I18NString.i18nString(UiStrings.SuggestOnTriggerCharactersDescription)
}

export const quickSuggestions = (): string => {
  return I18NString.i18nString(UiStrings.QuickSuggestions)
}

export const quickSuggestionsDescription = (): string => {
  return I18NString.i18nString(UiStrings.QuickSuggestionsDescription)
}

export const parameterHints = (): string => {
  return I18NString.i18nString(UiStrings.ParameterHints)
}

export const parameterHintsDescription = (): string => {
  return I18NString.i18nString(UiStrings.ParameterHintsDescription)
}

export const autoClosingBrackets = (): string => {
  return I18NString.i18nString(UiStrings.AutoClosingBrackets)
}

export const autoClosingBracketsDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoClosingBracketsDescription)
}

export const autoClosingQuotes = (): string => {
  return I18NString.i18nString(UiStrings.AutoClosingQuotes)
}

export const autoClosingQuotesDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoClosingQuotesDescription)
}

export const autoClosingOvertype = (): string => {
  return I18NString.i18nString(UiStrings.AutoClosingOvertype)
}

export const autoClosingOvertypeDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoClosingOvertypeDescription)
}

export const autoClosingDelete = (): string => {
  return I18NString.i18nString(UiStrings.AutoClosingDelete)
}

export const autoClosingDeleteDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoClosingDeleteDescription)
}

export const autoSurround = (): string => {
  return I18NString.i18nString(UiStrings.AutoSurround)
}

export const autoSurroundDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoSurroundDescription)
}

export const bracketPairColorization = (): string => {
  return I18NString.i18nString(UiStrings.BracketPairColorization)
}

export const bracketPairColorizationDescription = (): string => {
  return I18NString.i18nString(UiStrings.BracketPairColorizationDescription)
}

export const guides = (): string => {
  return I18NString.i18nString(UiStrings.Guides)
}

export const guidesDescription = (): string => {
  return I18NString.i18nString(UiStrings.GuidesDescription)
}

export const dragAndDrop = (): string => {
  return I18NString.i18nString(UiStrings.DragAndDrop)
}

export const dragAndDropDescription = (): string => {
  return I18NString.i18nString(UiStrings.DragAndDropDescription)
}

export const copyWithSyntaxHighlighting = (): string => {
  return I18NString.i18nString(UiStrings.CopyWithSyntaxHighlighting)
}

export const copyWithSyntaxHighlightingDescription = (): string => {
  return I18NString.i18nString(UiStrings.CopyWithSyntaxHighlightingDescription)
}

export const multiCursorModifier = (): string => {
  return I18NString.i18nString(UiStrings.MultiCursorModifier)
}

export const multiCursorModifierDescription = (): string => {
  return I18NString.i18nString(UiStrings.MultiCursorModifierDescription)
}

export const multiCursorPaste = (): string => {
  return I18NString.i18nString(UiStrings.MultiCursorPaste)
}

export const multiCursorPasteDescription = (): string => {
  return I18NString.i18nString(UiStrings.MultiCursorPasteDescription)
}

export const occurrencesHighlight = (): string => {
  return I18NString.i18nString(UiStrings.OccurrencesHighlight)
}

export const occurrencesHighlightDescription = (): string => {
  return I18NString.i18nString(UiStrings.OccurrencesHighlightDescription)
}

export const selectionHighlight = (): string => {
  return I18NString.i18nString(UiStrings.SelectionHighlight)
}

export const selectionHighlightDescription = (): string => {
  return I18NString.i18nString(UiStrings.SelectionHighlightDescription)
}

export const semanticHighlighting = (): string => {
  return I18NString.i18nString(UiStrings.SemanticHighlighting)
}

export const semanticHighlightingDescription = (): string => {
  return I18NString.i18nString(UiStrings.SemanticHighlightingDescription)
}

export const tokenColorCustomizations = (): string => {
  return I18NString.i18nString(UiStrings.TokenColorCustomizations)
}

export const tokenColorCustomizationsDescription = (): string => {
  return I18NString.i18nString(UiStrings.TokenColorCustomizationsDescription)
}

export const workbenchColorCustomizations = (): string => {
  return I18NString.i18nString(UiStrings.WorkbenchColorCustomizations)
}

export const workbenchColorCustomizationsDescription = (): string => {
  return I18NString.i18nString(UiStrings.WorkbenchColorCustomizationsDescription)
}

export const editorColorCustomizations = (): string => {
  return I18NString.i18nString(UiStrings.EditorColorCustomizations)
}

export const editorColorCustomizationsDescription = (): string => {
  return I18NString.i18nString(UiStrings.EditorColorCustomizationsDescription)
}

export const diffEditor = (): string => {
  return I18NString.i18nString(UiStrings.DiffEditor)
}

export const diffEditorDescription = (): string => {
  return I18NString.i18nString(UiStrings.DiffEditorDescription)
}

export const diffWordWrap = (): string => {
  return I18NString.i18nString(UiStrings.DiffWordWrap)
}

export const diffWordWrapDescription = (): string => {
  return I18NString.i18nString(UiStrings.DiffWordWrapDescription)
}

export const diffCodeLens = (): string => {
  return I18NString.i18nString(UiStrings.DiffCodeLens)
}

export const diffCodeLensDescription = (): string => {
  return I18NString.i18nString(UiStrings.DiffCodeLensDescription)
}

export const diffRenderSideBySide = (): string => {
  return I18NString.i18nString(UiStrings.DiffRenderSideBySide)
}

export const diffRenderSideBySideDescription = (): string => {
  return I18NString.i18nString(UiStrings.DiffRenderSideBySideDescription)
}

export const diffIgnoreTrimWhitespace = (): string => {
  return I18NString.i18nString(UiStrings.DiffIgnoreTrimWhitespace)
}

export const diffIgnoreTrimWhitespaceDescription = (): string => {
  return I18NString.i18nString(UiStrings.DiffIgnoreTrimWhitespaceDescription)
}

export const diffRenderIndicators = (): string => {
  return I18NString.i18nString(UiStrings.DiffRenderIndicators)
}

export const diffRenderIndicatorsDescription = (): string => {
  return I18NString.i18nString(UiStrings.DiffRenderIndicatorsDescription)
}

export const diffRenderOverviewRuler = (): string => {
  return I18NString.i18nString(UiStrings.DiffRenderOverviewRuler)
}

export const diffRenderOverviewRulerDescription = (): string => {
  return I18NString.i18nString(UiStrings.DiffRenderOverviewRulerDescription)
}

export const diffRenderMarginRevertIcon = (): string => {
  return I18NString.i18nString(UiStrings.DiffRenderMarginRevertIcon)
}

export const diffRenderMarginRevertIconDescription = (): string => {
  return I18NString.i18nString(UiStrings.DiffRenderMarginRevertIconDescription)
}

// Additional Text Editor Settings
export const insertMode = (): string => {
  return I18NString.i18nString(UiStrings.InsertMode)
}

export const insertModeDescription = (): string => {
  return I18NString.i18nString(UiStrings.InsertModeDescription)
}

export const overwriteMode = (): string => {
  return I18NString.i18nString(UiStrings.OverwriteMode)
}

export const overwriteModeDescription = (): string => {
  return I18NString.i18nString(UiStrings.OverwriteModeDescription)
}

export const readOnly = (): string => {
  return I18NString.i18nString(UiStrings.ReadOnly)
}

export const readOnlyDescription = (): string => {
  return I18NString.i18nString(UiStrings.ReadOnlyDescription)
}

export const accessibilitySupport = (): string => {
  return I18NString.i18nString(UiStrings.AccessibilitySupport)
}

export const accessibilitySupportDescription = (): string => {
  return I18NString.i18nString(UiStrings.AccessibilitySupportDescription)
}

export const autoIndent = (): string => {
  return I18NString.i18nString(UiStrings.AutoIndent)
}

export const autoIndentDescription = (): string => {
  return I18NString.i18nString(UiStrings.AutoIndentDescription)
}

export const bracketMatching = (): string => {
  return I18NString.i18nString(UiStrings.BracketMatching)
}

export const bracketMatchingDescription = (): string => {
  return I18NString.i18nString(UiStrings.BracketMatchingDescription)
}

export const centeredLayout = (): string => {
  return I18NString.i18nString(UiStrings.CenteredLayout)
}

export const centeredLayoutDescription = (): string => {
  return I18NString.i18nString(UiStrings.CenteredLayoutDescription)
}

export const columnSelection = (): string => {
  return I18NString.i18nString(UiStrings.ColumnSelection)
}

export const columnSelectionDescription = (): string => {
  return I18NString.i18nString(UiStrings.ColumnSelectionDescription)
}

export const contextmenu = (): string => {
  return I18NString.i18nString(UiStrings.Contextmenu)
}

export const contextmenuDescription = (): string => {
  return I18NString.i18nString(UiStrings.ContextmenuDescription)
}

export const cursorSmoothCaretAnimation = (): string => {
  return I18NString.i18nString(UiStrings.CursorSmoothCaretAnimation)
}

export const cursorSmoothCaretAnimationDescription = (): string => {
  return I18NString.i18nString(UiStrings.CursorSmoothCaretAnimationDescription)
}

export const cursorSurroundingLines = (): string => {
  return I18NString.i18nString(UiStrings.CursorSurroundingLines)
}

export const cursorSurroundingLinesDescription = (): string => {
  return I18NString.i18nString(UiStrings.CursorSurroundingLinesDescription)
}

export const cursorSurroundingLinesStyle = (): string => {
  return I18NString.i18nString(UiStrings.CursorSurroundingLinesStyle)
}

export const cursorSurroundingLinesStyleDescription = (): string => {
  return I18NString.i18nString(UiStrings.CursorSurroundingLinesStyleDescription)
}

export const disableMonospaceOptimizations = (): string => {
  return I18NString.i18nString(UiStrings.DisableMonospaceOptimizations)
}

export const disableMonospaceOptimizationsDescription = (): string => {
  return I18NString.i18nString(UiStrings.DisableMonospaceOptimizationsDescription)
}

export const emptySelectionClipboard = (): string => {
  return I18NString.i18nString(UiStrings.EmptySelectionClipboard)
}

export const emptySelectionClipboardDescription = (): string => {
  return I18NString.i18nString(UiStrings.EmptySelectionClipboardDescription)
}

export const extraEditorClassName = (): string => {
  return I18NString.i18nString(UiStrings.ExtraEditorClassName)
}

export const extraEditorClassNameDescription = (): string => {
  return I18NString.i18nString(UiStrings.ExtraEditorClassNameDescription)
}

export const fastScrollSensitivity = (): string => {
  return I18NString.i18nString(UiStrings.FastScrollSensitivity)
}

export const fastScrollSensitivityDescription = (): string => {
  return I18NString.i18nString(UiStrings.FastScrollSensitivityDescription)
}

export const find = (): string => {
  return I18NString.i18nString(UiStrings.Find)
}

export const findDescription = (): string => {
  return I18NString.i18nString(UiStrings.FindDescription)
}

export const fixedOverflowWidgets = (): string => {
  return I18NString.i18nString(UiStrings.FixedOverflowWidgets)
}

export const fixedOverflowWidgetsDescription = (): string => {
  return I18NString.i18nString(UiStrings.FixedOverflowWidgetsDescription)
}

export const foldingStrategy = (): string => {
  return I18NString.i18nString(UiStrings.FoldingStrategy)
}

export const foldingStrategyDescription = (): string => {
  return I18NString.i18nString(UiStrings.FoldingStrategyDescription)
}

export const fontLigatures = (): string => {
  return I18NString.i18nString(UiStrings.FontLigatures)
}

export const fontLigaturesDescription = (): string => {
  return I18NString.i18nString(UiStrings.FontLigaturesDescription)
}

export const glyphMargin = (): string => {
  return I18NString.i18nString(UiStrings.GlyphMargin)
}

export const glyphMarginDescription = (): string => {
  return I18NString.i18nString(UiStrings.GlyphMarginDescription)
}

export const gotoLocation = (): string => {
  return I18NString.i18nString(UiStrings.GotoLocation)
}

export const gotoLocationDescription = (): string => {
  return I18NString.i18nString(UiStrings.GotoLocationDescription)
}

export const hideCursorInOverviewRuler = (): string => {
  return I18NString.i18nString(UiStrings.HideCursorInOverviewRuler)
}

export const hideCursorInOverviewRulerDescription = (): string => {
  return I18NString.i18nString(UiStrings.HideCursorInOverviewRulerDescription)
}

export const hover = (): string => {
  return I18NString.i18nString(UiStrings.Hover)
}

export const hoverDescription = (): string => {
  return I18NString.i18nString(UiStrings.HoverDescription)
}

export const inDiffEditor = (): string => {
  return I18NString.i18nString(UiStrings.InDiffEditor)
}

export const inDiffEditorDescription = (): string => {
  return I18NString.i18nString(UiStrings.InDiffEditorDescription)
}

export const letterSpacing = (): string => {
  return I18NString.i18nString(UiStrings.LetterSpacing)
}

export const letterSpacingDescription = (): string => {
  return I18NString.i18nString(UiStrings.LetterSpacingDescription)
}

export const lightbulbEnabled = (): string => {
  return I18NString.i18nString(UiStrings.LightbulbEnabled)
}

export const lightbulbEnabledDescription = (): string => {
  return I18NString.i18nString(UiStrings.LightbulbEnabledDescription)
}

export const lineDecorationsWidth = (): string => {
  return I18NString.i18nString(UiStrings.LineDecorationsWidth)
}

export const lineDecorationsWidthDescription = (): string => {
  return I18NString.i18nString(UiStrings.LineDecorationsWidthDescription)
}

export const lineHeight = (): string => {
  return I18NString.i18nString(UiStrings.LineHeight)
}

export const lineHeightDescription = (): string => {
  return I18NString.i18nString(UiStrings.LineHeightDescription)
}

export const matchBrackets = (): string => {
  return I18NString.i18nString(UiStrings.MatchBrackets)
}

export const matchBracketsDescription = (): string => {
  return I18NString.i18nString(UiStrings.MatchBracketsDescription)
}

export const minimapEnabled = (): string => {
  return I18NString.i18nString(UiStrings.MinimapEnabled)
}

export const minimapEnabledDescription = (): string => {
  return I18NString.i18nString(UiStrings.MinimapEnabledDescription)
}

export const mouseWheelScrollSensitivity = (): string => {
  return I18NString.i18nString(UiStrings.MouseWheelScrollSensitivity)
}

export const mouseWheelScrollSensitivityDescription = (): string => {
  return I18NString.i18nString(UiStrings.MouseWheelScrollSensitivityDescription)
}

export const mouseWheelZoom = (): string => {
  return I18NString.i18nString(UiStrings.MouseWheelZoom)
}

export const mouseWheelZoomDescription = (): string => {
  return I18NString.i18nString(UiStrings.MouseWheelZoomDescription)
}

export const multiCursorMergeOverlapping = (): string => {
  return I18NString.i18nString(UiStrings.MultiCursorMergeOverlapping)
}

export const multiCursorMergeOverlappingDescription = (): string => {
  return I18NString.i18nString(UiStrings.MultiCursorMergeOverlappingDescription)
}

export const overviewRulerBorder = (): string => {
  return I18NString.i18nString(UiStrings.OverviewRulerBorder)
}

export const overviewRulerBorderDescription = (): string => {
  return I18NString.i18nString(UiStrings.OverviewRulerBorderDescription)
}

export const overviewRulerLanes = (): string => {
  return I18NString.i18nString(UiStrings.OverviewRulerLanes)
}

export const overviewRulerLanesDescription = (): string => {
  return I18NString.i18nString(UiStrings.OverviewRulerLanesDescription)
}

export const peekWidgetDefaultFocus = (): string => {
  return I18NString.i18nString(UiStrings.PeekWidgetDefaultFocus)
}

export const peekWidgetDefaultFocusDescription = (): string => {
  return I18NString.i18nString(UiStrings.PeekWidgetDefaultFocusDescription)
}

export const quickSuggestionsDelay = (): string => {
  return I18NString.i18nString(UiStrings.QuickSuggestionsDelay)
}

export const quickSuggestionsDelayDescription = (): string => {
  return I18NString.i18nString(UiStrings.QuickSuggestionsDelayDescription)
}

export const renderFinalNewline = (): string => {
  return I18NString.i18nString(UiStrings.RenderFinalNewline)
}

export const renderFinalNewlineDescription = (): string => {
  return I18NString.i18nString(UiStrings.RenderFinalNewlineDescription)
}

export const renderValidationDecorations = (): string => {
  return I18NString.i18nString(UiStrings.RenderValidationDecorations)
}

export const renderValidationDecorationsDescription = (): string => {
  return I18NString.i18nString(UiStrings.RenderValidationDecorationsDescription)
}

export const revealHorizontalRightPadding = (): string => {
  return I18NString.i18nString(UiStrings.RevealHorizontalRightPadding)
}

export const revealHorizontalRightPaddingDescription = (): string => {
  return I18NString.i18nString(UiStrings.RevealHorizontalRightPaddingDescription)
}

export const roundedSelection = (): string => {
  return I18NString.i18nString(UiStrings.RoundedSelection)
}

export const roundedSelectionDescription = (): string => {
  return I18NString.i18nString(UiStrings.RoundedSelectionDescription)
}

export const rulers = (): string => {
  return I18NString.i18nString(UiStrings.Rulers)
}

export const rulersDescription = (): string => {
  return I18NString.i18nString(UiStrings.RulersDescription)
}

export const scrollBeyondLastColumn = (): string => {
  return I18NString.i18nString(UiStrings.ScrollBeyondLastColumn)
}

export const scrollBeyondLastColumnDescription = (): string => {
  return I18NString.i18nString(UiStrings.ScrollBeyondLastColumnDescription)
}

export const scrollbar = (): string => {
  return I18NString.i18nString(UiStrings.Scrollbar)
}

export const scrollbarDescription = (): string => {
  return I18NString.i18nString(UiStrings.ScrollbarDescription)
}

export const scrollPredominantAxis = (): string => {
  return I18NString.i18nString(UiStrings.ScrollPredominantAxis)
}

export const scrollPredominantAxisDescription = (): string => {
  return I18NString.i18nString(UiStrings.ScrollPredominantAxisDescription)
}

export const selectionClipboard = (): string => {
  return I18NString.i18nString(UiStrings.SelectionClipboard)
}

export const selectionClipboardDescription = (): string => {
  return I18NString.i18nString(UiStrings.SelectionClipboardDescription)
}

export const showUnused = (): string => {
  return I18NString.i18nString(UiStrings.ShowUnused)
}

export const showUnusedDescription = (): string => {
  return I18NString.i18nString(UiStrings.ShowUnusedDescription)
}

export const snippetSuggestions = (): string => {
  return I18NString.i18nString(UiStrings.SnippetSuggestions)
}

export const snippetSuggestionsDescription = (): string => {
  return I18NString.i18nString(UiStrings.SnippetSuggestionsDescription)
}

export const suggest = (): string => {
  return I18NString.i18nString(UiStrings.Suggest)
}

export const suggestDescription = (): string => {
  return I18NString.i18nString(UiStrings.SuggestDescription)
}

export const suggestFontSize = (): string => {
  return I18NString.i18nString(UiStrings.SuggestFontSize)
}

export const suggestFontSizeDescription = (): string => {
  return I18NString.i18nString(UiStrings.SuggestFontSizeDescription)
}

export const suggestLineHeight = (): string => {
  return I18NString.i18nString(UiStrings.SuggestLineHeight)
}

export const suggestLineHeightDescription = (): string => {
  return I18NString.i18nString(UiStrings.SuggestLineHeightDescription)
}

export const suggestSelection = (): string => {
  return I18NString.i18nString(UiStrings.SuggestSelection)
}

export const suggestSelectionDescription = (): string => {
  return I18NString.i18nString(UiStrings.SuggestSelectionDescription)
}

export const useTabStops = (): string => {
  return I18NString.i18nString(UiStrings.UseTabStops)
}

export const useTabStopsDescription = (): string => {
  return I18NString.i18nString(UiStrings.UseTabStopsDescription)
}

export const wordSeparators = (): string => {
  return I18NString.i18nString(UiStrings.WordSeparators)
}

export const wordSeparatorsDescription = (): string => {
  return I18NString.i18nString(UiStrings.WordSeparatorsDescription)
}

export const wrappingIndent = (): string => {
  return I18NString.i18nString(UiStrings.WrappingIndent)
}

export const wrappingIndentDescription = (): string => {
  return I18NString.i18nString(UiStrings.WrappingIndentDescription)
}

export const unknownSettingType = (): string => {
  return I18NString.i18nString(UiStrings.UnknownSettingType)
}

// Menu Entry Labels
export const advanced = (): string => {
  return I18NString.i18nString(UiStrings.Advanced)
}

export const experimental = (): string => {
  return I18NString.i18nString(UiStrings.Experimental)
}

export const extensionId = (): string => {
  return I18NString.i18nString(UiStrings.ExtensionId)
}

export const feature = (): string => {
  return I18NString.i18nString(UiStrings.Feature)
}

export const language = (): string => {
  return I18NString.i18nString(UiStrings.Language)
}

export const modified = (): string => {
  return I18NString.i18nString(UiStrings.Modified)
}

export const preview = (): string => {
  return I18NString.i18nString(UiStrings.Preview)
}

export const settingId = (): string => {
  return I18NString.i18nString(UiStrings.SettingId)
}

export const stable = (): string => {
  return I18NString.i18nString(UiStrings.Stable)
}

export const tag = (): string => {
  return I18NString.i18nString(UiStrings.Tag)
}
