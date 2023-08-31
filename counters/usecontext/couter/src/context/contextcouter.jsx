   import React, { createContext,useState } from 'react'
     
   export  const contextcounter = createContext()
     export const Counterprovider = ({children}) => {
      

       const [count,setCount] = useState(0)
       const [errors,seterrors] = useState(false)

        const Handleincrement =()=>{
           setCount((prev)=> prev +1)
        }
            
        const Handledecrement =()=>{
         count <=0 ? seterrors(true): setCount((prev)=> prev -1)
       }

         return <contextcounter.Provider value={{count,Handledecrement,Handleincrement,errors,seterrors}}>{children}</contextcounter.Provider>

         
      }

