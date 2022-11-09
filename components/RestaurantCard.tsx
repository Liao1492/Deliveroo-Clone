import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, MapIcon } from "react-native-heroicons/outline";
interface IProps {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishesh: string[];
  long: number;
  lat: number;
}

const RestaurantCard = (props: IProps) => {
  return (
    <TouchableOpacity className="bg-white rounded-b mr-5">
      <Image source={{ uri: props.imgUrl }} className="h-36 w-64 rounded" />
      <View className="p-2 ">
        <Text className="font-bold text-lg pt-2">{props.title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{props.rating}</Text>
            {" - "}
            {props.genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <MapIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">
            Nearby - {props.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
