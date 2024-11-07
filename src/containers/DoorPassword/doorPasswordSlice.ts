import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface doorPasswordState {
    enteredPassword: string;
    isSuitablePassword: boolean | null;
}
const initialState: doorPasswordState = {
    enteredPassword: '',
    isSuitablePassword: null,
};
export const doorPasswordSlice = createSlice({
    name: "doorPassword",
    initialState,
    reducers: {
        appendSymbol: (state, action: PayloadAction<string>) => {
            if (state.enteredPassword.length < 4) {
                state.enteredPassword += action.payload;
            }
        },
        removeSymbol: (state) => {
            state.enteredPassword = state.enteredPassword.slice(0, -1);
        },
        verifyDoorPassword: (state) => {
            const staticCorrectDoorPassword = '1503';
            state.isSuitablePassword = state.enteredPassword === staticCorrectDoorPassword;
        },
        resetDoorPassword: (state) => {
            state.enteredPassword = '';
            state.isSuitablePassword = null;
        }
    },
});

export const doorPasswordReducer = doorPasswordSlice.reducer;
export const {appendSymbol, removeSymbol, verifyDoorPassword, resetDoorPassword} = doorPasswordSlice.actions;