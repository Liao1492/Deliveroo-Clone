import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
interface IProps {
  title: string;
  description: string;
  id: string;
}

const FeaturedRow = ({ title, description, id }: IProps) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'featured' && _id ==$id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, [id]);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 "
      >
        {/* Restaurant Cards */}
        {restaurants.map((rest) => {
          console.log(rest);
          return (
            <RestaurantCard
              key={rest._id}
              id={rest._id}
              imgUrl={rest.image}
              title={rest.name}
              rating={rest.rating}
              genre={title}
              address={rest.address}
              short_description={rest.short_description}
              dishes={rest.dishes}
              long={rest.long}
              lat={rest.lat}
            />
          );
        })}

        {/* <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_description="This is a desc"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_description="This is a desc"
          dishes={[]}
          long={20}
          lat={0}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
