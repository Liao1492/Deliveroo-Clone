import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "../store/store";
import { getRestaurantSlice } from "../store/slices/restaurantSlice";
import {
  getBasketState,
  getBasketStateTotal,
} from "../store/slices/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";
import { useDispatch } from "../store/store";
import { removeFromBasket } from "../store/slices/basketSlice";
import { formatCurrency } from "react-native-format-currency";

const BasketScreen = () => {
  const navigation = useNavigation();
  const { restaurant } = useSelector(getRestaurantSlice);
  const [groupedItemsBasket, setGroupedItemsBasket] = useState({});
  const totalPrice = useSelector(getBasketStateTotal);
  const { items } = useSelector(getBasketState);
  const dispatch = useDispatch();
  const [formattedCurrency] = formatCurrency({
    amount: totalPrice,
    code: "EUR",
  });

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsBasket(groupedItems);
  }, [items]);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100 relative ">
        <View className="p-5 border-b border-[#00CCBB] relative">
          <View>
            <Text className="text-lg font-bold text-center"> Basket </Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute rounded-full bg-gray-100 top-5 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <Text className="flex-1">Delivery in 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsBasket).map(([key, items]) => {
            const [formattedCurrency] = formatCurrency({
              amount: items[0]?.price,
              code: "EUR",
            });

            return (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5"
              >
                {/* @ts-ignore */}
                <Text>{items.length} x </Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text className="text-gray-600">{formattedCurrency}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeFromBasket(items[0]));
                  }}
                >
                  <Text className="text-[#00CCBB] text-xs">Remove</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-5">
          <View className="flex-row justify-between">
            <Text className=" text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{formattedCurrency}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className=" text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">€5.99</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text>€{totalPrice + 5.99}</Text>
          </View>
          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4"
            onPress={() => {
              //@ts-ignore
              navigation.navigate("PreparingOrderScreen");
            }}
          >
            <Text className="text-white font-bold text-center">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
