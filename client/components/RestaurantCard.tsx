import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, MapIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
  long: number;
  lat: number;
}

const RestaurantCard = (props: IProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        //@ts-ignore
        navigation.navigate("Restaurant", {
          id: props.id,
          imgUrl: props.imgUrl,
          title: props.title,
          rating: props.rating,
          genre: props.genre,
          address: props.address,
          short_description: props.short_description,
          dishes: props.dishes,
          long: props.long,
          lat: props.lat,
        });
      }}
      className="bg-white rounded-b mr-5"
    >
      <Image
        source={{ uri: urlFor(props.imgUrl).url() }}
        className="h-36 w-64 rounded"
      />
      <View className="p-2">
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
