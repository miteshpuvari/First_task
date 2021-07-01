import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OffDuty = props =>  {
    
  return (
    <View >
      <Text>{props.obj.km}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    
  }
});

export default OffDuty;