import { SettingsWorker } from '@lvce-editor/rpc-registry'
import type { SchemaError } from '../SchemaError/SchemaError.ts'

export const getSchemaErrors = async (): Promise<readonly SchemaError[]> => {
  try {
    return await SettingsWorker.invoke('SettingsWorker.getSchemaErrors')
  } catch {
    // Older settings-worker versions do not expose schema diagnostics yet.
    return []
  }
}
