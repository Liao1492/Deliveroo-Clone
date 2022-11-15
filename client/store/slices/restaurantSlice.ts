import { InitialState } from "@react-navigation/native";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { IDish } from "../../types/types";
export interface RestaurantInterface {
  restaurant: {
    id: number;
    imgUrl: string;
    title: string;
    rating: null;
    genre: string;
    address: string;
    short_description: string;
    dishes: IDish[];
    long: number;
    lat: number;
  };
}
const initialState = {
  restaurant: {
    id: null,
    imgUrl: "",
    title: "",
    rating: null,
    genre: "",
    address: "",
    short_description: "",
    dishes: [],
    long: null,
    lat: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState: initialState,
  reducers: {
    setRestaurant: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.restaurant>
    ) => {
      state.restaurant = action.payload;
    },
  },
});

export const getRestaurantSlice = (state: {
  restaurant: RestaurantInterface;
}) => state.restaurant;

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
