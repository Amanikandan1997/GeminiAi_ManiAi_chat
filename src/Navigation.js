import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react'
import GeminiChat from "../GeminiChat";
import HomeScreen from "./HomeScreen";



const Stack=createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="home" component={HomeScreen} 
        options={{headerShown:false}} />
        <Stack.Screen name="chat" component={GeminiChat} />
    </Stack.Navigator>
  )
}

export default Navigation