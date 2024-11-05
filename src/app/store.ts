import {configureStore} from "@reduxjs/toolkit";


 export const store = configureStore({
    counter: {}
});

 export type RootState = ReturnType<typeof store.getStore>;
 export type AppDispatch = typeof store.dispatch;