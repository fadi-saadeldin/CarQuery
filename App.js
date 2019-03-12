import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './src/app';
export default class App extends React.Component {
  render() {
    return (
      <MainApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
