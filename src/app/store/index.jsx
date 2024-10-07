import { configureStore } from "@reduxjs/toolkit";
import lensReducer from '../../features/lents/store/lensSlice'
import userReducer from '../../features/login/store/userSlice'
import tipoLunaReducer from '../../features/tipoLunas/store/tipoLunaSlice'
export const store = configureStore({
  reducer: {
    lens: lensReducer,
    user: userReducer,
    tipoLuna: tipoLunaReducer
  },
});
