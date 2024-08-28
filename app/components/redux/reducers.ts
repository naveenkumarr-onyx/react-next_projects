import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  counter: 0,
};

export const mainSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    increment: (state, actions) => {
      console.log(actions.payload);
      state.counter += actions.payload * 2;
    },
  },
});

export const { increment } = mainSlice.actions;
export default mainSlice.reducer;
