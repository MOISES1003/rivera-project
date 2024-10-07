import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tipoLunas: [],
  loading: false,
  error: null,
};
const tipoLunaSlice = createSlice({
  name: "tipoLuna",
  initialState,
  reducers: {
    fetchTipoLunaStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTipoLunaSuccess: (state, action) => {
      state.loading = false;
      state.tipoLunas = action.payload.data;
    },
    fetchTipoLunaFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  fetchTipoLunaStart,
  fetchTipoLunaSuccess,
  fetchTipoLunaFailure,
} = tipoLunaSlice.actions;
export default tipoLunaSlice.reducer;
