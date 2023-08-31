
import { useContext} from "react";
import {CounterContext} from './Context'

export const Couter = () => {
 
     const {state,dispatch} = useContext(CounterContext)
     

     
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type : 'decrement'})}>-</button>
        <button onClick={()=>dispatch({type : 'increment'})}>+</button>
    </div>
  )
    }
