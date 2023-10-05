import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import api from "service/api.js"

export const fetchProducts  = createAsyncThunk('store/fetchProducts' , async function(_ , {getState ,rejectWithValue , signal}){
    const state  = getState()
    console.log('createAsyncThunk' , arguments ,state);
    try {
        const {data} = await api.get('/products',{signal});
        return data
    }catch(err){
        rejectWithValue(err)
    }

})
export const fetchProduct  = createAsyncThunk('store/fetchProductByProductId' , async function({productId} , {getState ,rejectWithValue}){
    const state  = getState()
    console.log('createAsyncThunk' , arguments ,state);
    try {
        const {data} = await api.get(`/products/${productId}`);
        return data
    }catch(err){
        rejectWithValue(err)
    }

})

export const fetchCarts  = createAsyncThunk('store/fetchCarts' , async function(_ , {getState ,rejectWithValue}){
    const state  = getState()
    try {
        const {data} = await api.get('/carts');
        return data
    }catch(err){
        rejectWithValue(err)
    }

})
export const fetchCart  = createAsyncThunk('store/fetchCartByCartId' , async function({cartId} , {getState ,rejectWithValue}){
    const state  = getState()
    try {
        const {data} = await api.get(`/carts/${cartId}`);
        return data
    }catch(err){
        rejectWithValue(err)
    }

})

const LOADING_STATUS ={
    IDLE:'IDLE',
    PENDING:'PENDING',
    SUCCESS:'SUCCESS',
    FAILURE:'FAILURE'
}
const initialState = {
    cartsObj:{

        cartsStatus: LOADING_STATUS.IDLE,
        carts:[],
    },
    productsObj:{
        products:[],
        productsStatus: LOADING_STATUS.IDLE,

    }
}
const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        console.log("extraReducer" , arguments);
        builder.addCase(fetchProducts.fulfilled , function (state , action) {
            state.productsObj.products = action.payload?.products
            state.productsObj.productsStatus = LOADING_STATUS.SUCCESS
        })
        builder.addCase(fetchProducts.pending , function(state ){
            state.productsObj.productsStatus = LOADING_STATUS.PENDING
            state.productsObj.products = []
        })
        builder.addCase(fetchProducts.rejected , function(state ,action){
            state.productsObj.products = [];
            state.productsObj.productsStatus = LOADING_STATUS.FAILURE
        })

        builder.addCase(fetchCarts.fulfilled , function (state , action) {
            state.cartsObj.carts = action.payload?.products
            state.cartsObj.cartsStatus = LOADING_STATUS.SUCCESS
        })
        builder.addCase(fetchCarts.pending , function(state ){
            state.cartsObj.cartsStatus = LOADING_STATUS.PENDING
            state.cartsObj.carts = []
        })
        builder.addCase(fetchCarts.rejected , function(state ,action){
            state.cartsObj.carts = [];
            state.cartsObj.cartsStatus = LOADING_STATUS.FAILURE
        })
    }
})


const storeReducer = storeSlice.reducer
export default storeReducer;