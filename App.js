/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/HomeScreen';
import  CardImageExample  from './src/screens/Test/test';


const App: () => Node = () => {


  return (
    <SafeAreaView >
      <StatusBar  />
       <Home></Home>
       
    </SafeAreaView>
  );
};


export default App;
