import { createSlice } from "@reduxjs/toolkit";

function getUserFromLocal() {
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
        const parsedData = JSON.parse(savedUserData);
        return parsedData;
    } else {
        return {};
    }
}

function getTokenFromLocal() {
    const savedToken = localStorage.getItem("token");

    if (savedToken) {
        return savedToken
    } else {
        return "";
    }
}

const initialState = {
    userData: getUserFromLocal(),
    token: getTokenFromLocal(),
    isLogin: ((getTokenFromLocal() != null) ? true : false)
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        afterLogin(state, action) {
            state.userData = action.payload
            state.token = action.payload.token
            state.isLogin = state.token != null
            localStorage.setItem("userData", JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.token);
        },
        logout(state) {
            state.userData = {}
            state.token = null
            state.isLogin = false
            localStorage.removeItem("userData");
            localStorage.removeItem("token");
        }
    }

})

export const { afterLogin, logout, setIsLogin } = authSlice.actions
export default authSlice.reducer