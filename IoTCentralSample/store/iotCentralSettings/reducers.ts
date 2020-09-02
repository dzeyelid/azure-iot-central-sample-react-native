import { IoTCentralSettings, IoTCentralSettingsActionTypes, SET_ID_SCOPE, SET_DEVICE_ID, SET_SYMMETRIC_KEY } from './types';

const initialState: IoTCentralSettings = {
  idScope: '',
  deviceId: '',
  symmetricKey: '',
}

const iotCentralSettingsReducer = (
  state = initialState,
  action: IoTCentralSettingsActionTypes,
): IoTCentralSettings => {
  switch (action.type) {
    case SET_ID_SCOPE:
      return {
        ...state,
        idScope: action.payload
      };
    case SET_DEVICE_ID:
      return {
        ...state,
        deviceId: action.payload
      };
    case SET_SYMMETRIC_KEY:
      return {
        ...state,
        symmetricKey: action.payload
      };
    default: 
      return state;
  }
}

export default iotCentralSettingsReducer
