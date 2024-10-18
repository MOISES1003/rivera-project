import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lenses: [],
  stockLenses: [],
  links: [],
  lensToEdit: [],
  pageStatic: "",
  loading: false,
  error: null,
  messaSuccess: null, // mostrar los mensajes exitosos
  active: false, // Cambié 'ative' a 'active' correctamente
};

const lensSlice = createSlice({
  name: "lens",
  initialState,
  reducers: {
    LensesStart: (state) => {
      state.loading = true;
      state.error = null;
      state.messaSuccess = null;
    },
    fetchLensesSuccess: (state, action) => {
      state.loading = false;
      state.lenses = action.payload.data;
      state.links = action.payload.links;
      state.pageStatic = action.payload.pageStatic;
    },
    // Acción para cargar solo los lentes en stock
    fetchStockLensesSuccess: (state, action) => {
      state.loading = false;
      state.stockLenses = action.payload.data;
    },
    LensesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    openForm: (state, action) => {
      state.active = true;
      state.lensToEdit = action.payload; // Guardamos el lente que queremos editar
    },
    closeForm: (state) => {
      state.active = false;
      state.lensToEdit = null; // Limpiamos el lente al cerrar el formulario
    },
    // Crear lentes
    createLensSuccess: (state, action) => {
      state.loading = false;
      state.lenses.push(action.payload.data);
      state.messaSuccess = action.payload.message;
    },
    // Editar lentes
    updatedLensSuccess: (state, action) => {
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
  LensesStart,
  fetchStockLensesSuccess,
  LensesFailure,
  fetchLensesSuccess,
  createLensSuccess,
  updatedLensSuccess,
  openForm, // Exportar las acciones del modal
  closeForm,
} = lensSlice.actions;
export default lensSlice.reducer;
