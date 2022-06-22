import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";
const stack= createStackNavigator;
export default function App() {
  return (
    <NavigatorContraiter>
      <stack.Navigator initialRouteName = "home" screemOptions = {{
        headershown:false
      }}></stack.Navigator>
      <stack.Screen name = "home" component = {HomeScreen}></stack.Screen>
    </NavigatorContraiter>
    <View style={styles.container}>
      <Text>¡Abre App.js para empezar a trabajar en tu app!</Text>
      <HomeScreen></HomeScreen>
      <IssLocationScreen/>
      <MeteorScreen/>
      <UpdateScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
