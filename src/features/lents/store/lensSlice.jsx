import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lenses: [],
  links: [],
  lensToEdit:[],
  pageStatic: "",
  loading: false,
  error: null,
  active: false,  // Cambié 'ative' a 'active' correctamente
};

const lensSlice = createSlice({
  name: "lens",
  initialState,
  reducers: {
    LensesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchLensesSuccess: (state, action) => {
      state.loading = false;
      state.lenses = action.payload.data;
      state.links = action.payload.links;
      state.pageStatic = action.payload.pageStatic;
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
      state.lenses.push(action.payload);
    },
    // Editar lentes
    updatedLensSuccess: (state, action) => {
      console.log('payload recibido:', action.payload);  // Log para verificar el payload
      state.loading = false;
      const updatedLens = action.payload;
      if (updatedLens && updatedLens.id_lentes) {
        const index = state.lenses.findIndex((lens) => lens && lens.id_lentes === updatedLens.id_lentes);
        if (index !== -1) {
          state.lenses[index] = { ...state.lenses[index], ...updatedLens };
        }
      }
    }
    
  },
});

export const {
  LensesStart,
  LensesFailure,
  fetchLensesSuccess,
  createLensSuccess,
  updatedLensSuccess,
  openForm,  // Exportar las acciones del modal
  closeForm,
} = lensSlice.actions;
export default lensSlice.reducer;
