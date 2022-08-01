/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  TabActions,
} from "@react-navigation/native";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, View, Image,Text } from "react-native";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import RandevuAl from "../screens/RandevuAl";
import NotificationScreen from "../screens/NotificationScreen";
import CalendarScreen from "../screens/CalendarScreen";
import RequestScreen from "../screens/RequestScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import AccountScreen from "../screens/AccountScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Hesap Ayarları" }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor:'#fff',
        tabBarStyle: { position: "absolute", marginBottom: 2, height: "8%" },
        // tabBarActiveTintColor:Colors.light.tint,
        tabBarShowLabel: false,
        tabBarInactiveBackgroundColor :'#fff'
        
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          
          headerLeftContainerStyle:{
            marginRight:15,
            marginLeft:5,
           },
           headerRightContainerStyle:{
            marginLeft:15,
            marginRight:10,
           },
           headerStyle:{
             backgroundColor:Colors.light.tint
           },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
              color="#444444"
              size={32}
              style={{
                // color:focused? Colors.light.tint:'#444444',
                borderBottomColor: focused ? Colors.light.tint : "#444444",
                borderBottomWidth: focused ? 4 : 0,
              }}
            />
          ),
          headerLeft:()=>(
             <MaterialCommunityIcons name="playlist-edit" size={30}  color={Colors.light.white}/>
             
          ),
         
          headerTitle:()=>(
             <Text style={{fontSize:20 , fontWeight:'bold', color:Colors.light.white}}>Fırat Üniversitesi</Text>
          ), 

          headerTitleAlign:'left',

          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Account')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginRight:10,
              })}>
              <MaterialCommunityIcons
               name="account-edit"
               size={32}
               color="#444444"
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "Calendar Screen",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="calendar"
              color="#444444"
              size={32}
              style={{
                paddingBottom: 4,
                //color:focused? Colors.light.tint:'#444444',
                borderBottomColor: focused ? Colors.light.tint : "#444444",
                borderBottomWidth: focused ? 4 : 0,
              }}
            />
          ),
        }}
      />

      
      <BottomTab.Screen
        name="Randevu"
        component={RandevuAl}
        options = {({navigation}:RootTabScreenProps<'Randevu'>) =>({ 
          title: "seacrh for appointment",
          
          tabBarIcon: ({ focused }) => (
            <Pressable
            onPress={() => navigation.navigate('Randevu')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 4,
             // marginLeft:5
            })}>
            <View>
              <Image
                source={require("../assets/images/ArkaPlan.png")}
                 style={{width:60,height:55,
                  paddingBottom:5,
                   tintColor: focused ?Colors.light.tint : Colors.light.tint
                }}
              />
              <Text
                style={{color:focused? '#fff':'#fff',height:50}}
              > Merhaba </Text>
            </View>
            </Pressable>
          ),
    })}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "Notification Screen",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="notifications"
              color="#444444"
              size={32}
              style={{
                //color:focused? Colors.light.tint:'#444444',
                borderBottomColor: focused ? Colors.light.tint : "#444444",
                borderBottomWidth: focused ? 4 : 0,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Request"
        component={RequestScreen}
        options={{
          title: "gelen randevu isteklerim ",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="playlist-check"
              color="#444444"
              size={32}
              style={{
                //  color:focused? Colors.light.tint:'#444444',
                borderBottomColor: focused ? Colors.light.tint : "#444444",
                borderBottomWidth: focused ? 4 : 0,
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
