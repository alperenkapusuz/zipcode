import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./CustomButton.style";

const CustomButton = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} />;
};

export default CustomButton;
