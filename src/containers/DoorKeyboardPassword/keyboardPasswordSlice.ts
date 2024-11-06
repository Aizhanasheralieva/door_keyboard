import {createSlice} from "@reduxjs/toolkit";

interface doorKeyboardPasswordState {
    enteredPassword: string;
    passwordIsSuitable: boolean | null;
}

const initialState: doorKeyboardPasswordState = {
    enteredPassword: '',
    passwordIsSuitable: null,
};
export const keyboardPasswordSlice = createSlice({
    name: "doorPassword",
    initialState,
    reducers: {},
});

export const doorKeyboardReducer = keyboardPasswordSlice.reducer;

export const