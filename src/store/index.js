import { configureStore } from '@reduxjs/toolkit'
import {photoReducer, starWarsHistoryReducer} from "./redusers";

export const store = configureStore({
    reducer: {
        starWarsHistory: starWarsHistoryReducer,
        photo: photoReducer
    },
})