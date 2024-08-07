import { configureStore } from "@reduxjs/toolkit";
import lensReducer from '../../features/lents/store/lensSlice'
export const store = configureStore({
  reducer: {
    lens: lensReducer 
  },
});
