import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lenses: [],
  links: [],
  pageStatic: "",
  loading: false,
  error: null
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
      state.lenses = action.payload.data;
      state.links = action.payload.links;
      state.pageStatic = action.payload.pageStatic;
    },
    fetchLensesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //pare crear los lentes
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
