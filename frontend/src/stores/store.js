import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/LoginSlice";
import registerReducer from "../slices/RegisterSlice";;

const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
    }
})

export default store;