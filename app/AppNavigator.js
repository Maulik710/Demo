import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import questions from './screens/questions';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Questions" component={questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;