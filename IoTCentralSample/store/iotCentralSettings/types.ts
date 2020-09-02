export interface IoTCentralSettings {
  idScope: string
  deviceId: string
  symmetricKey: string
}

export const SET_ID_SCOPE = 'iotCentralSettings/setIdScope'
export const SET_DEVICE_ID = 'iotCentralSettings/setDeviceId'
export const SET_SYMMETRIC_KEY = 'iotCentralSettings/setSymmetricKey'

interface SetIdScopeAction {
  type: typeof SET_ID_SCOPE
  payload: string
}

interface SetDeviceIdAction {
  type: typeof SET_DEVICE_ID
  payload: string
}

interface SetSymmetricKeyAction {
  type: typeof SET_SYMMETRIC_KEY
  payload: string
}

export type IoTCentralSettingsActionTypes = SetIdScopeAction | SetDeviceIdAction | SetSymmetricKeyAction
