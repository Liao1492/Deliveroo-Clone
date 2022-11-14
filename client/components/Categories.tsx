import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoriesCard from "./CategoriesCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type =="category"]
    `
      )
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((cat) => (
        <CategoriesCard key={cat._id} imageUrl={cat.image} title={cat.title} />
      ))}
    </ScrollView>
  );
};

export default Categories;
