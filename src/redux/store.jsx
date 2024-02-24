import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";
const store = configureStore({
    reducer:{
        users : UserReducer,
    }
})
export default store;