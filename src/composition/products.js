import {useState , useEffect , useRef} from "react"
import { fetchProducts } from "store/slice/store.slice.js"
import { useSelector, useDispatch } from "react-redux";

export function useProducts(){
    const {products , productsStatus}  = useSelector(state => state.store.productsObj)
    
    const productsPromiseRef =  useRef(null);
    const dispatch = useDispatch()
    function abortRequest(){
        if(productsPromiseRef.current){
            productsPromiseRef.current.abort()
            productsPromiseRef.current = null
        }
    }
    function fetchTheProducts(){
        productsPromiseRef.current =   dispatch(fetchProducts())
        productsPromiseRef.current.then(() =>{
            productsPromiseRef.current = null
        })
    }

    useEffect(function(){
        return function(){
            abortRequest()
        }
    } , [])
    

    return {products , fetchTheProducts , productsStatus , abortRequest}
}