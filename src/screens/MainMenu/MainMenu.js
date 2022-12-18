import React from "react";
import { View, Text } from "react-native";
import styles from "./MainMenu.style";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const MainMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 100 }}>
      <CustomButton
        title="Şehre göre ara"
        onPress={() => navigation.navigate("SearchByAddressScreen")}
      />
      <CustomButton
        title="Posta koduna göre ara"
        onPress={() => navigation.navigate("SearchByCodeScreen")}
      />
    </View>
  );
};

export default MainMenu;
