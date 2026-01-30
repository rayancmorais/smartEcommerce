import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number | string;
  title: string;
  price: number;
  imageURL: string;
  qty: number;
  sum: number;
}

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const doesItemExist = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (doesItemExist) {
        doesItemExist.qty += 1;
        doesItemExist.sum += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }

      // removeItem(state, action) {
      //   state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
