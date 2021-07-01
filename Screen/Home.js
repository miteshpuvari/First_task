import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import OffDuty from '../Screen/OffDuty';
import Data from '../Data/Data.json';

const Home = props =>  {
    console.log(Data);
  return (
    <ScrollView style={styles.cardContainer}>
      {props.Data.map(d => {return(<OffDuty obj={d} />)})}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    margin: 15,
    height: '25%',
    marginBottom: '100%',
    borderRadius: 10,
    marginTop: 4.5,
    shadowOpacity: 0.26,
    shadowOffset: {width: 80, height: 10},
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: 'white',
  }
});

export default Home;