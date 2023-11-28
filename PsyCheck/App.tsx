import React from 'react';
import StackComponent from './src/routes/stack';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <StackComponent />
      <Toast />
    </>
  );
}
