import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { Input } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabActionsParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

type TabSettingsScreenNaviagationProp = StackNavigationProp<
  TabActionsParamList,
  'Actions'
>;

type Props = {
  navigation: TabSettingsScreenNaviagationProp;
};

export default function TabSettingsScreen(props: Props) {
  const navigation = useNavigation<>{};
  const [idScope, setIdScope] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [symmetricKey, setSymmetricKey] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Input
        label='ID scope'
        placeholder='Type ID scope'
        leftIcon={{ type: 'antdesign', name: 'bars' }}
        onChangeText={idScope => setIdScope(idScope)}
        defaultValue={idScope}
      />
      <Input
        label='Device ID'
        placeholder='Type Device ID'
        leftIcon={{ type: 'antdesign', name: 'bars' }}
        onChangeText={deviceId => setDeviceId(deviceId)}
        defaultValue={deviceId}
      />
      <Input
        label='Symmetric key'
        placeholder='Type Primary key or Secondary key'
        leftIcon={{ type: 'antdesign', name: 'key' }}
        onChangeText={symmetricKey => setSymmetricKey(symmetricKey)}
        defaultValue={symmetricKey}
      />
      <Button
        title='Save'
        onPress={() => {
          props.navigation.navigate('Actions', {
            idScope,
            deviceId,
            symmetricKey,
          });
        }}
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
