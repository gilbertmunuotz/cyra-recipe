import LoginReducer from "../slices/LoginSlice";
import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "../slices/RegisterSlice";

const store = configureStore({
    reducer: {
        login: LoginReducer,
        register: RegisterSlice,
    }
})

export default store;