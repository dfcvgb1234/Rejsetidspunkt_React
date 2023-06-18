import {View, Text, StyleSheet} from "react-native"
import Home from "./screens/Home"
import Profile from "./screens/Profile"


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  }
})

export default App;