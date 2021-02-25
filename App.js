import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import loginsignup from "./screens/loginsignup"
import HomeScreen from "./screens/homescreen"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
export default function App() {
  return (
    <View style={styles.container}>
    
    <SafeAreaProvider>
     <AppContainer />
     </SafeAreaProvider>

     
    
    
    </View>
  );
}
const AppNavigator=createSwitchNavigator({
loginsignup:{screen:loginsignup},
  HomeScreen:{screen:HomeScreen}
})
const AppContainer=createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
