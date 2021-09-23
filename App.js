import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const stack = createStackNavigator()

import UserDetailScreen from './screens/UserDetailScreen';
import CreateUserScreens from './screens/CreateUserScreen';
import UsersList from './screens/UsersList';

function MyStack(){
  return (
    <stack.Navigator>
      <stack.Screen name="CreateUserScreens" component={CreateUserScreens}></stack.Screen>
      <stack.Screen name="UsersList" component={UsersList} ></stack.Screen>
      
      <stack.Screen name= "UserDetailScreen" component={UserDetailScreen}></stack.Screen>
    </stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
       <MyStack/>
    </NavigationContainer>
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
