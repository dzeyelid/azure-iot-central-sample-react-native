import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { Text, View } from '../components/Themed';
import { RootState } from '../store';

export default function TabActionsScreen() {
  const selectIoTCentralSettings = (state: RootState) => state.iotCentralSettingsReducer

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actions</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>{useSelector(selectIoTCentralSettings).idScope}</Text>
      <Text>{useSelector(selectIoTCentralSettings).deviceId}</Text>
      <Text>{useSelector(selectIoTCentralSettings).symmetricKey}</Text>
      <Text>Send command</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
