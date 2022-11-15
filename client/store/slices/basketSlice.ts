import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { IDish } from "../../types/types";
export interface BasketInterface {
  items: IDish[];
}
const initialState: BasketInterface = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basketSlice",
  initialState: initialState,
  reducers: {
    addToBasket: (
      state: Draft<typeof initialState>,
      action: PayloadAction<IDish>
    ) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (
      state: Draft<typeof initialState>,
      action: PayloadAction<IDish>
    ) => {
      // state.items = state.items.filter((el) => el.id !== action.payload.id);
      const index = state.items.findIndex((el) => el.id === action.payload.id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const getBasketState = (state: { basket: BasketInterface }) =>
  state.basket;

export const getBasketStateId = (
  state: { basket: BasketInterface },
  id: string
) => state.basket.items.filter((el) => el.id === id);

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
