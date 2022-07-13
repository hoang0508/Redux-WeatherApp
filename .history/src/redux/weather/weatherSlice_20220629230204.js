import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    query: "",
    isLoading: true,
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
    setIsLoading: (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    getData() {},
  },
});

export const { setData, getData, setQuery, setIsLoading } =
  weatherSlice.actions;

export default weatherSlice.reducer;
