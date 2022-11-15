import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "../store/store";
import { getRestaurantSlice } from "../store/slices/restaurantSlice";
import MapView, { Marker } from "react-native-maps";
import { XMarkIcon } from "react-native-heroicons/solid";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const { restaurant } = useSelector(getRestaurantSlice);
  console.log(restaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity
            onPress={() =>
              //@ts-ignore
              navigation.navigate("Home")
            }
          >
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-white font-light text-lg">Order Help</Text>
        </View>
        <View className="bg-white rounded-lg p-5 mx-5 shadow-md z-50 ">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          {/* @ts-ignore */}
          <Progress.Bar indeterminate="true" size={30} color="#00CCBB" />
          <Text className="mt-3 text-gray-500">
            Your Order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        className="flex-1 -mt-10 z-0"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}
          identifier="origin"
          pinColor="#00CCBB"
          description={restaurant.short_description}
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="rounded-full h-12 w-12 bg-gray-300 p-4 ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Delivery Man</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
