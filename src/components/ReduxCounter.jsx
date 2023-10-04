import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "store/slice/counter.slice.js"
import { fetchProducts } from "store/slice/store.slice.js"

export default function () {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    useEffect(function () {

        fetchTheProducts()
        return abortRequest
    }, [])

    return (
        <div>
            <h1>Counter</h1>
            <div>
                <span>{counter}</span>
            </div>
            <div>
                <div>
                    <button onClick={console.log}>Increment</button>
                </div>
            </div>
        </div>
    )
}