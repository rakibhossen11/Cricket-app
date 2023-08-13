import React from "react";
import { ScrollView } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const HomeScreen = () =>{

    const data = [
        {
            "id": 1,
            "name1" : "Bangledesh",
            "name2" : "India",
            "time" : "3:00",
            "Venu" : "Dhaka" 
        },
        {
            "id": 2,
            "name1" : "Bangledesh",
            "name2" : "India",
            "time" : "3:00",
            "Venu" : "Dhaka" 
        },
        {
            "id": 3,
            "name1" : "Bangledesh",
            "name2" : "India",
            "time" : "3:00",
            "Venu" : "Dhaka" 
        },
        {
            "id": 4,
            "name1" : "Bangledesh",
            "name2" : "India",
            "time" : "3:00",
            "Venu" : "Dhaka" 
        },
        {
            "id": 5,
            "name1" : "Bangledesh",
            "name2" : "India",
            "time" : "3:00",
            "Venu" : "Dhaka" 
        }
    ]

    return(
        <SafeAreaView>
            <ScrollView>
            <View style={{padding: 10,gap:10}}>
            {
                data.map((item) => 
                <View style={{backgroundColor: "#F1EBD1",padding: 15, borderRadius: 10}} item={item} key={item.id}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between",}}>
                    <Text>{item.name1}</Text>
                    <Text>VS</Text>
                    <Text>{item.name2}</Text>
                    </View>
                    <View style={{alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 15,}}>
                    <Text> Time: {item.time}</Text>
                    <Text> Venu: {item.Venu}</Text>
                    </View>
                </View> )
            }
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;