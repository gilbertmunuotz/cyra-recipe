import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: ''
}
const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerPending(state, action) {
            state.isLoading = true;
        },
        registerSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
        },
        registrationCompleted(state, action) {
            // Optional: Update state if needed after successful registration (e.g., show success message)
        },
        registerFail(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});
export const { registerPending, registerSuccess, registerFail, registrationCompleted } = registerSlice.actions;
export default registerSlice.reducer;