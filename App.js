import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TodoListScreen from './src/screens/TodoListScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';

const AppNavigator = createStackNavigator({
  TodoListScreen: { screen: TodoListScreen },
  AddTodoScreen: { screen: AddTodoScreen }
});

const AppContainer = createAppContainer(AppNavigator);

// Add StatusBar for Expo
// <StatusBar style="auto" />

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}