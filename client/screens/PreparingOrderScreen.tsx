import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      //@ts-ignore
      navigation.navigate("Delivery");
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
      <Animatable.Image
        source={require("../assets/order.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-72 w-56 rounded-3xl"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for the restaurant to accept
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color={"white"} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
