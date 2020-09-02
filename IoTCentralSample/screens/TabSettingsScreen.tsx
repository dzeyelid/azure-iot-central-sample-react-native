import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { Text, View } from '../components/Themed';
import { TabActionsParamList } from '../types';
import { RootState, IoTCentralSettingsDispatch } from '../store';
import { setIdScope, setDeviceId, setSymmetricKey } from '../store/iotCentralSettings/actions';

type TabSettingsScreenNaviagationProp = StackNavigationProp<
  TabActionsParamList,
  'Actions'
>;

type Props = {
  navigation: TabSettingsScreenNaviagationProp;
};

export default function TabSettingsScreen(props: Props) {
  const selectIoTCentralSettings = (state: RootState) => state.iotCentralSettingsReducer
  const dispatchIoTCentralSettings: IoTCentralSettingsDispatch = useDispatch()
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Input
        label='ID scope'
        placeholder='Type ID scope'
        leftIcon={{ type: 'antdesign', name: 'bars' }}
        onChangeText={idScope => dispatchIoTCentralSettings(setIdScope(idScope))}
        defaultValue={useSelector(selectIoTCentralSettings).idScope}
      />
      <Input
        label='Device ID'
        placeholder='Type Device ID'
        leftIcon={{ type: 'antdesign', name: 'bars' }}
        onChangeText={deviceId => dispatchIoTCentralSettings(setDeviceId(deviceId))}
        defaultValue={useSelector(selectIoTCentralSettings).deviceId}
      />
      <Input
        label='Symmetric key'
        placeholder='Type Primary key or Secondary key'
        leftIcon={{ type: 'antdesign', name: 'key' }}
        onChangeText={symmetricKey => dispatchIoTCentralSettings(setSymmetricKey(symmetricKey))}
        defaultValue={useSelector(selectIoTCentralSettings).symmetricKey}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
