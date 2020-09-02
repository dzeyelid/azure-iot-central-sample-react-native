import { combineReducers, createStore } from 'redux';
import iotCentralSettingsReducer from './iotCentralSettings/reducers';

const rootReducer = combineReducers({
    iotCentralSettingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;

export type IoTCentralSettingsDispatch = typeof store.dispatch;
