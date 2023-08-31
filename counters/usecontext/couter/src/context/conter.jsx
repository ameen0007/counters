import React, { useContext } from 'react'
import './conter.css'
import { contextcounter } from './contextcouter'

export const Counter = () => {
     const changeerror =()=>{
      seterrors(false)
     }
     const {count,Handledecrement,Handleincrement,errors,seterrors} = useContext(contextcounter)
  return (
    <div className='counter-container' >
       {errors && <div className='box'>
        <p> <h2>sorry......! </h2><br /> maximum decrement limit is "0"</p>
         <button onClick= {changeerror} className='ok'>Ok</button>
       </div>}
        <div>
         <h1 >Using UseContext</h1>
         </div>
         <div className='inside'>
         
         <div>
         <button onClick={Handledecrement} className='button-68'>-</button>
         </div>
         <div>
         <h1>{count}</h1>
         </div>
         <div>
         <button onClick={Handleincrement}className='button-69'>+</button>
         </div>
          
        </div>
        
    </div>
  )
}
