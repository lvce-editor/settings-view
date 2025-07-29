import { RendererWorker } from '@lvce-editor/rpc-registry'

export const getPreferences = async (): Promise<any> => {
  try {
    // @ts-ignore
    return await RendererWorker.invoke('Preferences.getAll')
  } catch {
    return {}
  }
}
