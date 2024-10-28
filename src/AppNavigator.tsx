// src/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './screens/HomeScreen';  

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Logo">
      <Stack.Screen 
        name="Logo" 
        component={LogoScreen} 
        options={{ headerShown: false }} 
      />
      {/* You can add more screens here in the future */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
