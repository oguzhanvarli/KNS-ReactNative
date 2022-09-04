import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MechanicsDetails from "./screens/MechanicsDetails";
import React from 'react'
import Search from "./screens/Search";
import Home from "./screens/Home";


const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
            headerShown: false
          }}/>
        <Stack.Screen name="MechanicDetails" component={MechanicsDetails} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router