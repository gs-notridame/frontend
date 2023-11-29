import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Quiz from '../screens/Quiz/index';
import Diagnosis from '../screens/Diagnosis';
import TabNavigator from '../components/TabNavigator/TabNavigator';
import DiagnosisResult from '../screens/DiagnosisResult';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  Login: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Login"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Cadastro"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={Register}
        />
        <Stack.Screen
          name="Quiz"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={Quiz}
        />
        <Stack.Screen
          name="Diagnosis"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={Diagnosis}
        />
        <Stack.Screen
          name="DiagnosisResult"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={DiagnosisResult}
        />
        <Stack.Screen
          name="TabNavigator"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            gestureEnabled: false,
          }}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
