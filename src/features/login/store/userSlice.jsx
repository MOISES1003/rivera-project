import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    loading: false,
    error: null,
  };
  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      fetchUsersStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      },
      fetchUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      createUserStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      createUserSuccess: (state, action) => {
        state.loading = false;
        state.lenses.push(action.payload);
      },
      createUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  export const {
    fetchUsersStart,
    fetchUserSuccess,
    fetchUserFailure,
    createUserStart,
    createUserSuccess,
    createUserFailure,
  } = userSlice.actions;
  export default userSlice.reducer;