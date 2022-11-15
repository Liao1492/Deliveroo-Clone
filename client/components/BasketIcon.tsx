import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "../store/store";
import { getBasketState } from "../store/slices/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(getBasketState);
  const navigation = useNavigation;
  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  );
};

export default BasketIcon;
