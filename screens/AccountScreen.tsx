
import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text, View } from 'react-native'
import SettingsContainer from '../components/SettingsContainer/SettingsContainer';



export default function SettingsScreen() {
  return (
    <View style={styles.container}>
     
         <Text > progfile picture </Text>
         <Text> personel informations name , department,mail </Text>

            <View>
               <SettingsContainer />
               <SettingsContainer />
               <SettingsContainer />
               <SettingsContainer />
               <SettingsContainer />
               
            </View>
          
          <Text> çıkış</Text>
     
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
