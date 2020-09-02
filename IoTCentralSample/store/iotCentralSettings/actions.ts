import {
  IoTCentralSettingsActionTypes,
  SET_ID_SCOPE,
  SET_DEVICE_ID,
  SET_SYMMETRIC_KEY,
} from './types'

export const setIdScope = (idScope: string): IoTCentralSettingsActionTypes => {
  return {
    type: SET_ID_SCOPE,
    payload: idScope,
  }
}

export const setDeviceId = (deviceId: string): IoTCentralSettingsActionTypes => {
  return {
    type: SET_DEVICE_ID,
    payload: deviceId,
  }
}

export const setSymmetricKey = (symmetricKey: string): IoTCentralSettingsActionTypes => {
  return {
    type: SET_SYMMETRIC_KEY,
    payload: symmetricKey,
  }
}
