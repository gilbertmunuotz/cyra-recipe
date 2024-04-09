import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuth: false,
    error: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginPending(state, action) {
            state.isLoading = true;
        },
        loginSuccess(state, action) {
            state.isLoading = false;
            state.isAuth = true;
            state.error = '';
        },
        loginFail(state, action) {
            state.isLoading = false;
            state.error = action.payload; // Access error message from payload
        },
    },
});

export const { loginPending, loginSuccess, loginFail } = loginSlice.actions;
export default loginSlice.reducer;
