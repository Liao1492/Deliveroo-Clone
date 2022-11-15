import { View, Text, TouchableOpacity, Image } from "react-native";
import { formatCurrency } from "react-native-format-currency";

import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch } from "../store/store";
import { addToBasket, removeFromBasket } from "../store/slices/basketSlice";
import { useSelector } from "../store/store";
import { getBasketStateId } from "../store/slices/basketSlice";
import { urlFor } from "../sanity";

interface IProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
const DishRow = ({ id, name, description, price, image }: IProps) => {
  const [formattedCurrency] = formatCurrency({ amount: price, code: "EUR" });
  const [isPressed, setIsPressed] = useState(false);
  const dishArr = useSelector((state) => getBasketStateId(state, id));
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemToBasket = () => {
    dispatch(removeFromBasket({ id, name, description, price, image }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed((prev) => !prev)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{formattedCurrency}</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemToBasket}
              disabled={dishArr.length === 0}
            >
              <MinusCircleIcon
                size={40}
                color={dishArr.length === 0 ? "#808080" : "#00CCBB"}
              />
            </TouchableOpacity>
            <Text>{dishArr.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color={"#00CCBB"} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
