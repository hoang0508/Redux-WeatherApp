import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    query: "",
  },
  reducers: {
    setData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
    getData() {},
  },
});

export const { setData, getData, setQuery } = weatherSlice.actions;

export default weatherSlice.reducer;
