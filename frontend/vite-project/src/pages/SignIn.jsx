import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const SignIn = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
 
    const navigate=useNavigate()

    const handleSignUp = () =>
    {
      navigate("/signup")
    }

    const handleForgetPassword = () => {
       navigate("/signin")
    }

    const handleSubmit =async (e) => {

      try 
      {
        var response =await axios.post(`https://login-backend-final-d406.onrender.com/signin`,{email,password})

      if(response.status === 200)
      {
        navigate("/success")
      }
      }
      catch(error)
      {
        alert("Sign in Failed, User not Found.")
        navigate("/signup")
      }

    }

  return (
    <>
     <div className='relative bg-[url("./assets/bg1.jpg")] bg-cover h-screen w-screen flex flex-col justify-center items-center'>
        <h1 className='absolute top-0 left-0 m-6 text-6xl font-extrabold text-red-600 ' >
          NETFLIX
        </h1>
       
        <div className=' text-center text-white border-none backdrop-brightness-50 rounded-xl p-10 w-[500px] max-h-full overflow-y-auto'>
                
               <h1 className='text-5xl font-bold '>
                Sign In
                </h1>
                <div className='mt-8'>
                    <input className='text-xl border border-gray-400 p-3 bg-transparent outline-none w-3/4 rounded-lg' 
                    type="text" 
                    placeholder='E-mail or Mobile number' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    /> <br /> <br />

                    <input className='text-xl border border-gray-400 p-3 bg-transparent outline-none w-3/4 rounded-lg' 
                    type="password" 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
               <button className='text-xl border border-red-600 bg-red-600 mt-5 rounded-lg w-3/4 p-3 '
                   onClick={handleSubmit}>
                   Sign In
               </button>
              <br /> <br />
              <button onClick={handleForgetPassword} className=' underline text-2xl '>
                Forget Password ?
              </button>
             
            <p className='text-2xl mt-5 flex gap-3'>
                New to Netflix?
               <button onClick={handleSignUp} className='hover:underline'>Sign up now.</button>
            </p>
             

        
        
        </div>
    </div>
    </>
   
  )
}

export default SignIn
