import {configureStore} from "@reduxjs/toolkit";
import {keyboardPasswordSlice} from "../containers/DoorKeyboardPassword/keyboardPasswordSlice.ts";


 export const store = configureStore({
    reducer: {
        keyboardPassword: keyboardPasswordSlice.reducer,
    }
});

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;