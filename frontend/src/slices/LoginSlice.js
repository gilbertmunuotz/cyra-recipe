import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./Logservices";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};


const login = createAsyncThunk(
    'http://localhost:4000/api/send/login', // Replace with your login endpoint
    async (user, thunkAPI) => {
        try {
            const response = await authService.login(user);
            return response.data; // Assuming successful response returns user data
        } catch (error) {
            // Handle errors appropriately
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
    }
});

export const { reset } = loginSlice.actions;
export default loginSlice.reducer;
