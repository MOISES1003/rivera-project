import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lenses: [],
  loading: false,
  error: null,
};

const lensSlice = createSlice({
  name: "lens",
  initialState,
  reducers: {
    fetchLensesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchLensesSuccess: (state, action) => {
      state.loading = false;
      state.lenses = action.payload;
    },
    fetchLensesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createLensStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createLensSuccess: (state, action) => {
      state.loading = false;
      state.lenses.push(action.payload);
    },
    createLensFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchLensesStart,
  fetchLensesSuccess,
  fetchLensesFailure,
  createLensStart,
  createLensSuccess,
  createLensFailure,
} = lensSlice.actions;
export default lensSlice.reducer;
