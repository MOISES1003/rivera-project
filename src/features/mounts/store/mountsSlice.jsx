import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mounts: [],
  links: [],
  mountsSelect: [],
  pageStatic: "",
  loading: false,
  error: null,
  messaSuccess: null, // mostrar los mensajes exitosos
  active: false, // Cambié 'ative' a 'active' correctamente
};

const mountsSlice = createSlice({
  name: "mounts",
  initialState,
  reducers: {
    MountsStart: (state) => {
      state.loading = true;
      state.error = null;
      state.messaSuccess = null;
    },
    fetchLensesSuccess: (state, action) => {
      state.loading = false;
      state.mounts = action.payload.data;
      state.links = action.payload.links;
      state.pageStatic = action.payload.pageStatic;
    },
    MountsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addSelect: (state, action) => {
      state.mountsSelect = action.payload; // Guardamos el lente que queremos editar
    },
    cleanSelect: (state) => {
      state.mountsSelect = null; // Limpiamos el lente al cerrar el formulario
    },
    // Crear lentes
    createMountsSuccess: (state, action) => {
      state.loading = false;
      state.lenses.push(action.payload.data);
      state.messaSuccess = action.payload.message;
    },
    // Editar lentes
    updatedMountsSuccess: (state, action) => {
      state.loading = false;
      const updatedLens = action.payload.data;
      state.messaSuccess = action.payload.message;
      if (updatedLens && updatedLens.id_lentes) {
        const index = state.lenses.findIndex(
          (lens) => lens && lens.id_lentes === updatedLens.id_lentes
        );
        if (index !== -1) {
          state.lenses[index] = { ...state.lenses[index], ...updatedLens };
        }
      }
    },
  },
});

export const {
  MountsStart,
  fetchLensesSuccess,
  MountsFailure,
  createMountsSuccess,
  updatedMountsSuccess,
  addSelect,
  cleanSelect,
} = mountsSlice.actions;
export default mountsSlice.reducer;
