import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "../store/store";
import {
  getBasketState,
  getBasketStateTotal,
} from "../store/slices/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "react-native-format-currency";

const BasketIcon = () => {
  const { items } = useSelector(getBasketState);

  const navigation = useNavigation();
  const totalPrice = useSelector(getBasketStateTotal);
  const [formattedCurrency] = formatCurrency({
    amount: totalPrice,
    code: "EUR",
  });

  return (
    <View className="absolute bottom-10 w-full z-50">
      {/* <Text>BasketIcon</Text>
       */}
      <TouchableOpacity
        className="bg-[#00CCBB] mx-5 rounded-lg flex-row items-center space-x-1 p-4"
        onPress={() => {
          //@ts-ignore
          navigation.navigate("Basket");
        }}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {formattedCurrency}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
