import { useSelector , useDispatch } from "react-redux";
import {increment , decrement} from "store/slice/counter.slice.js"

export default function(){
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter</h1>
            <div>
                <span>{counter}</span>
            </div>
            <div>
                <div>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                </div>
            </div>
        </div>
    )
}