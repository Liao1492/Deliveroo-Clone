import { configureStore, Store } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import restaurantSlice from "./slices/restaurantSlice";
export const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
