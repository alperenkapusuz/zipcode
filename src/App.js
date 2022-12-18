import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMenu from "../src/screens/MainMenu";
import SearchByAddressScreen from "../src/screens/SearchByAddressScreen";
import SearchByCodeScreen from "../src/screens/SearchByCodeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen
          name="SearchByAddressScreen"
          component={SearchByAddressScreen}
        />
        <Stack.Screen
          name="SearchByCodeScreen"
          component={SearchByCodeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
