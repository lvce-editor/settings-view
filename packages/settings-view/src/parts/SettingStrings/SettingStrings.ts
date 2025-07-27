import * as I18NString from '../I18NString/I18NString.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'

export const local = (): string => {
  return I18NString.i18nString(UiStrings.Local)
}

export const namedClosure = (name: string): string => {
  return I18NString.i18nString(UiStrings.NamedClosure, {
    PH1: name,
  })
}

export const closure = (): string => {
  return I18NString.i18nString(UiStrings.Closure)
}

export const global = (): string => {
  return I18NString.i18nString(UiStrings.Global)
}

export const block = (): string => {
  return I18NString.i18nString(UiStrings.Block)
}

export const expression = (): string => {
  return I18NString.i18nString(UiStrings.Expression)
}

export const module2 = (): string => {
  return I18NString.i18nString(UiStrings.Module)
}

export const evalScope = (): string => {
  return I18NString.i18nString(UiStrings.Eval)
}

export const script = (): string => {
  return I18NString.i18nString(UiStrings.Script)
}

export const withScope = (): string => {
  return I18NString.i18nString(UiStrings.With)
}

export const catchScope = (): string => {
  return I18NString.i18nString(UiStrings.Catch)
}

export const debuggerPaused = (): string => {
  return I18NString.i18nString(UiStrings.DebuggerPaused)
}

export const debuggerPausedOnException = (): string => {
  return I18NString.i18nString(UiStrings.DebuggerPausedOnException)
}

export const stepInto = (): string => {
  return I18NString.i18nString(UiStrings.StepInto)
}

export const stepOver = (): string => {
  return I18NString.i18nString(UiStrings.StepOver)
}

export const stepOut = (): string => {
  return I18NString.i18nString(UiStrings.StepOut)
}

export const pause = (): string => {
  return I18NString.i18nString(UiStrings.Pause)
}

export const watch = (): string => {
  return I18NString.i18nString(UiStrings.Watch)
}

export const breakPoints = (): string => {
  return I18NString.i18nString(UiStrings.BreakPoints)
}

export const scope = (): string => {
  return I18NString.i18nString(UiStrings.Scope)
}

export const callStack = (): string => {
  return I18NString.i18nString(UiStrings.CallStack)
}

export const notPaused = (): string => {
  return I18NString.i18nString(UiStrings.NotPaused)
}

export const resume = (): string => {
  return I18NString.i18nString(UiStrings.Resume)
}

export const restart = (): string => {
  return I18NString.i18nString(UiStrings.Restart)
}

export const stop = (): string => {
  return I18NString.i18nString(UiStrings.Stop)
}

export const pauseOnExceptions = (): string => {
  return I18NString.i18nString(UiStrings.PauseOnExceptions)
}

export const pauseOnUncaughtExceptions = (): string => {
  return I18NString.i18nString(UiStrings.PauseOnUncaughtExceptions)
}

export const noWatchExpression = (): string => {
  return I18NString.i18nString(UiStrings.NoWatchExpression)
}

export const deleteWatchExpression = (): string => {
  return I18NString.i18nString(UiStrings.DeleteWatchExpression)
}

export const deleteAllWatchExpressions = (): string => {
  return I18NString.i18nString(UiStrings.DeleteAllWatchExpressions)
}

export const addWatchExpression = (): string => {
  return I18NString.i18nString(UiStrings.AddWatchExpression)
}

export const refreshWatchExpressions = (): string => {
  return I18NString.i18nString(UiStrings.RefreshWatchExpressions)
}

export const noScriptRunning = (): string => {
  return I18NString.i18nString(UiStrings.NoScriptRunning)
}
