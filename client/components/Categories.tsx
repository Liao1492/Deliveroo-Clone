import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoriesCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoriesCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoriesCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoriesCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoriesCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
    </ScrollView>
  );
};

export default Categories;
