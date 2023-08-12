import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { View } from "react-native"
import HomeScreen from "../screens/HomeScreen";
import CricketScreen from "../screens/CricketScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = () =>{
    return(
            <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}  options={{headerShown: false}} />
            <Tab.Screen name="Cricket" component={CricketScreen} options={{headerShown: false}}/>
            </Tab.Navigator>
    )
}

export default BottomNavigation;