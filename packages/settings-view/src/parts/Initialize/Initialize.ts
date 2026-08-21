import { initializeSettingsWorker } from '../InitializeSettingsWorker/InitializeSettingsWorker.ts'

export const initialize = async (): Promise<void> => {
  await initializeSettingsWorker()
}
