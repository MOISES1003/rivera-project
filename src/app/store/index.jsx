import { configureStore } from "@reduxjs/toolkit";
import lensReducer from '../../features/lents/store/lensSlice'
import userReducer from '../../features/login/store/userSlice'
export const store = configureStore({
  reducer: {
    lens: lensReducer,
    user: userReducer
  },
});
