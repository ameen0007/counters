import React, { useReducer, } from 'react'

export const Counter = () => {
    
   const counterfunc =(state,action)=>{
    switch (action.type) {
      case "increment" :
        return{
        count :state.count+1
        }
      case "decrement":
        return{
        count :state.count-1
        }
      default:
        return state
    }
      
   }

   const [state ,dispatch]= useReducer(counterfunc,{
    count : 0,
   })
   


  return (
    <div>
        <h1>{state.count}</h1>
        <div>
        <button onClick={()=>dispatch({type : "decrement"})}>-</button>
        </div>
        <div>
        <button onClick={()=>dispatch({type : "increment"})}>+</button>
        </div>
    </div>
  )
}
