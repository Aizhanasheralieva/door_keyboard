import {createSlice} from "@reduxjs/toolkit";

interface doorPasswordState {
    enteredPassword: string;
    passwordIsSuitable: boolean | null;
}

const initialState: doorPasswordState = {
    enteredPassword: '',
    passwordIsSuitable: null,
};
export const doorPasswordSlice = createSlice({
    name: "doorPassword",
    initialState,
    reducers: {
        appendSymbol: (state, action) => {
            if (state.enteredPassword.length < 4) {
                state.enteredPassword += action.payload;
            }
        },
        removeSymbol: (state) => {
            state.enteredPassword = state.enteredPassword.slice(0, -1);
        }
    },
});

export const doorPasswordReducer = doorPasswordSlice.reducer;

export const {appendSymbol, removeSymbol} = doorPasswordSlice.actions;