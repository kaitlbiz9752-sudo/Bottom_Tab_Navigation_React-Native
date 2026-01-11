import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../../LoginScreen'; 
import WelcomeScreen from '../../WelcomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
    </Tab.Navigator>
    
  );
}