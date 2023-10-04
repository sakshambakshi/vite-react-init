import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducers from "store/slice/counter.slice.js"

export const store = configureStore({
    reducer:{
         counter: counterSliceReducers 
    }
})