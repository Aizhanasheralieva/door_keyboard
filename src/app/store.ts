import {configureStore} from "@reduxjs/toolkit";
import {doorPasswordReducer} from "../containers/DoorPassword/doorPasswordSlice.ts";


export const store = configureStore({
    reducer: {
        doorPassword: doorPasswordReducer,
    }
});

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;