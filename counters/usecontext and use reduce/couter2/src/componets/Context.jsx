import { createContext } from "react";
import { useReducer } from "react";
  
  export const CounterContext = createContext()

  const CounterReducer =(state,action)=>{
    switch (action.type) {
        case "increment":
            return{
                count : state.count+1
            }
         case "decrement":
            return{
                count : state.count-1
            }   
    
        default:
            return state

  }
}

  export const Contextprovider =({children})=>{
      
    const [state, dispatch] = useReducer(CounterReducer,{
        count : 0,
    })
      

      return <CounterContext.Provider value={{state,dispatch}}>{children}</CounterContext.Provider>
      
  }
   