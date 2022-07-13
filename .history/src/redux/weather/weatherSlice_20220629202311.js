import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    getData() {},
  },
});

export const { setData } = weatherSlice.actions;

export default weatherSlice.reducer;
