import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface IProps {
  imageUrl: string;
  title: string;
}
const CategoriesCard = ({ imageUrl, title }: IProps) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imageUrl }} className="rounded w-20 h-20" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
