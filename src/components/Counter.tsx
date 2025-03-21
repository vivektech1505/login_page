"use client"

import { useReducer } from "react";

// import React, { useReducer } from 'react'

// type Action = 
//     | {type : "INCREMENT"}
//     | {type : "DECREMENT"}
//     | {type : "RESET"}


// const initailState =0

// function CounterReducer(state : number, action : Action ) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//             case 'DECREMENT':
//                 return state > 0 ? state -1 : 0
//                 case 'RESET' : 
//                 return 0

//                 default : 
//                 return state
//     }

// }

// const Counter = () => {

//     const [ count, dispatch ] = useReducer(CounterReducer, initailState)
    // const Increment =()=>{
    //     setCount(count+1)
    // }
    // const Decrement =()=>{
    //     setCount(count-1)
    //     count > 0 ? count - 1 : 0
        
    // }
    // const Reset =()=>{
    //     setCount(0)
    // }
//   return (
//     <div className='flex flex-col justify-between items-center font-bold'>
//         <h1 className='font-44'>Count : {count}</h1>
//       <button className='cursor-pointer text-3xl' onClick={()=> dispatch({type : "INCREMENT"})}>+</button>
//       <button className='cursor-pointer text-2xl' onClick={()=> dispatch({type : "DECREMENT"})}>-</button>
//       <button className='cursor-pointer' onClick={()=> dispatch({type : "RESET"})}>Reset</button>
//     </div>
//   )
// }

// export default Counter;

type Action = 
| {type : "INCREMENT"}
| {type : "DECREMENT"}
| {type : "RESET"}

const initalValue = 0
const CounteReducer =(state : number, action : Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
            case 'DECREMENT':
                return state > 0 ? state -1 : 0
                
                case 'RESET':
                    return 0;

                    default :
                    return state
    }

}

const Counter = () => {

    const [count, dispatch] = useReducer(CounteReducer, initalValue)
    // const [count, setCount] = useState(0)

    // const Increment = () => {
    //     setCount(count + 1)
    // }
    // const Decrement = () => {
        
        // if(count > 0) {
        //     setCount(count - 1)
        // }
        
    //     count > 0 ? setCount(count - 1) : 0
        
    // }

    // const Reset = () => {
    //     setCount(0)
    // }

    return(
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-4xl font-bold">Count : {count}</h1>
            <button onClick={()=> dispatch({type : "INCREMENT"})}>+</button>
            <button onClick={()=> dispatch({type : "DECREMENT"})}>-</button>
            <button onClick={()=> dispatch({type : "RESET"})}>Reset</button>
        </div>
    )

}
export default Counter;
