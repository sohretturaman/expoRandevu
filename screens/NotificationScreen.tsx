
import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text, View } from 'react-native'



export default function NotificationScreen() {
  return (
    <View style={styles.container}>
     
         <Text > NOtifaications screen </Text>
     
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
