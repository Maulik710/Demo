import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './app/AppNavigator';
import store from './app/lib/store';

export default () => (

  <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});