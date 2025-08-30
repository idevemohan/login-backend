import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Success from './pages/Success.jsx'
function App() {

  return (
    <>
         <BrowserRouter>
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/success' element={<Success />} />
              <Route path='/forgetpassword' element={<SignIn />} />
            </Routes>

         </BrowserRouter>
    </>
  )
}

export default App
