import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lunas: [],
  monturas: [],
  medicamentos: [],
  loading: false,
  error: null,
};
const saleGlassesSlice = createSlice({
  name: "saleGlasses",
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addLunasSuccess: (state, action) => {
      state.loading = false;
      state.lunas.push(action.payload);
    },
    addMonturasSuccess: (state, action) => {
      state.loading = false;
      state.monturas.push(action.payload);
    },
    addMedicamentosSuccess: (state, action) => {
      state.loading = false;
      state.medicamentos.push(action.payload);
    },
  },
});
export const {
  fetchUsersStart,
  fetchUserFailure,
  addLunasSuccess,
  addMonturasSuccess,
  addMedicamentosSuccess,
} = saleGlassesSlice.actions;
export default saleGlassesSlice.reducer;
