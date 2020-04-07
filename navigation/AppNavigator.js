import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Appbar } from 'react-native-paper';

import ResultsScreen from '../screens/ResultsScreen';
import DriverResultInputScreen from '../screens/DriverResultInputScreen';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Results"
    >
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={{ title: 'Results' }}
      />
      <Stack.Screen
        name="Input"
        component={DriverResultInputScreen}
        options = { ({ navigation, route }) => ({
          header: () => (
            <Appbar.Header>
              <Appbar.BackAction onPress={() => navigation.goBack()} />
              <Appbar.Content title="Update Result" />
              <Appbar.Action icon="content-save" onPress={route.params.updateDriverResultAndBack} />
            </Appbar.Header>
          )})
        }
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
