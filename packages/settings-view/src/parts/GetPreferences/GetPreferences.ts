import { RendererWorker } from '@lvce-editor/rpc-registry'

export const getPreferences = async (): Promise<any> => {
  try {
    return await RendererWorker.getAllPreferences()
  } catch {
    return {}
  }
}
