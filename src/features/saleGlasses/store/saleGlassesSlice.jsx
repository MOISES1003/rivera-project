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
      const { id_lentes, stock } = action.payload;  // Extraemos el id y stock del payload
      const existingLuna = state.lunas.find((luna) => luna.id_lentes === id_lentes);

      if (existingLuna) {
        // Verifica si la cantidad total después del incremento supera el stock disponible
        const newQuantity = existingLuna.cantidad + 1;
        if (newQuantity <= stock) {
          // Aumenta la cantidad si no excede el stock
          existingLuna.cantidad = newQuantity;
        } else {
          // Si se intenta agregar más de lo permitido por el stock, puedes lanzar un error o manejarlo de otra manera
          state.error = `No puedes agregar más de ${stock} unidades`;
        }
      } else {
        // Si no existe la luna, la agregamos con cantidad 1
        state.lunas.push({
          ...action.payload,
          cantidad: 1,  // Valor inicial de cantidad
        });
      }

      state.loading = false;  // Desactiva el estado de carga
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
