import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMenu from "../screens/MainMenu";
import SearchByAddressScreen from "../screens/SearchByAddressScreen";
import SearchByCodeScreen from "../screens/SearchByCodeScreen";

const Stack = createNativeStackNavigator();

const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen
          name="SearchByAddressScreen"
          component={SearchByAddressScreen}
        />
        <Stack.Screen
          name="SearchByCodeScreen"
          component={SeacrhByCodeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
