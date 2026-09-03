import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "auth",
  initialState: {
    adminInfo: null,
    adminToken: null,

    userInfo: null,
    userToken: null,
  },
  reducers: {
    // ADMIN ACTIONS
    adminLogin: (state, { payload }) => {
      state.adminInfo = payload.adminInfo;
      state.adminToken = payload.adminToken;
    },
    adminLogout: (state) => {
      state.adminInfo = null;
      state.adminToken = null;
    },
    updateAdminInfo: (state, { payload }) => {
      if (state.adminInfo) {
        state.adminInfo = { ...state.adminInfo, ...payload };
      }
    },

    // GENERAL USER ACTIONS
    userLogin: (state, { payload }) => {
      state.userInfo = payload.userInfo;
      state.userToken = payload.userToken;
    },
    userLogout: (state) => {
      state.userInfo = null;
      state.userToken = null;
    },
    updateUserInfo: (state, { payload }) => {
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, ...payload };
      }
    },
  },
});

export const { 
  adminLogin, 
  adminLogout, 
  updateAdminInfo, 
  userLogin, 
  userLogout, 
  updateUserInfo 
} = MySlice.actions;

export default MySlice.reducer;