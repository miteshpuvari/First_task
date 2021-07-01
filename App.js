import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import Data from './Data/Data.json';
import Home from './Screen/Home';

const App = props => {
  console.log(Data);
  return (
    <ScrollView style={styles.container}>
       {
         Object.keys(Data).map(key => {
           return( <Home title={key} Data={Data[key]} />)
         })
       }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: '10%',
    backgroundColor: '#fff',
  },
  card: {
    height: '90%'
  }
});

export default App;
