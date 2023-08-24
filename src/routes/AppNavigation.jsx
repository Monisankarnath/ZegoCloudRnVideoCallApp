import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import CallPage from '../screens/CallPage';

const Stack = createNativeStackNavigator();

export default function AppNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CallPage" component={CallPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
