import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import Home from './screens/home';
import Summary from './screens/summary'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default function App() {
  return (
    <View >
      <AppContainer/>
    </View>
  );
}
var AppNavigator=createSwitchNavigator({
Home:Home,
Summary:Summary
})
const AppContainer=createAppContainer(AppNavigator)


