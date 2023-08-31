import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Counterprovider } from './context/contextcouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Counterprovider>
    <App />
 </Counterprovider>
 </StrictMode>
    
  
)
