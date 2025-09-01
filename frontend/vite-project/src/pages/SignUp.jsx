import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[confirmPassword,setConfirmPassword] = useState("")

    const navigate = useNavigate()

    const handleSignIn = () => {
      navigate("/signin")
    }
   
    const handleRegister = async (e) => {
      e.preventDefault()
      
      if(confirmPassword !== password)
      {
        alert("Passwords do not match")
        return
      }


      try{
        const response =await axios.post(`https://login-backend-2-w8d4.onrender.com/signup`,{email,password})

      if(response.status === 201)
      {
        alert("You are Registered Successfully....")
        navigate("/signin")
      }
      }
      catch(error)
      {
        alert("Registration Failed!! Please Try Again")
      }
    }

  return (
    <>
    <div className='relative bg-[url("./assets/bg1.jpg")] bg-cover h-screen w-screen flex flex-col justify-center items-center' >
      <h1 className='absolute top-0 left-0 text-6xl m-6 font-extrabold text-red-600'>
        NETFLIX
     </h1>
     <div className=' text-center text-white border-none backdrop-brightness-50 rounded-xl p-10 w-[500px] max-h-full overflow-y-auto'>
      <h1 className='text-5xl font-bold '>
        Sign Up
      </h1>
      
      <div className='mt-8'>
                    <input className='text-xl border border-gray-400 p-3 bg-transparent outline-none w-3/4 rounded-lg'
                     type="text" 
                     placeholder='E-mail'
                     value={email}
                     onChange={(e)=> setEmail(e.target.value) }
                     /> <br /> <br />

                    <input className='text-xl border border-gray-400 p-3 bg-transparent outline-none w-3/4 rounded-lg' 
                      type="password" 
                      placeholder='Create Password' 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      /> <br /> <br />

                    <input className='text-xl border border-gray-400 p-3 bg-transparent outline-none w-3/4 rounded-lg' 
                      type="password" 
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      />       
       </div>
       <button  className='text-xl border border-red-600 bg-red-600 mt-5 rounded-lg w-3/4 p-3 '
          onClick={handleRegister}
       >
           Register
      </button>

      <p className='text-2xl mt-5 flex gap-5'>
        Already have an Account? 
        <button onClick={handleSignIn} className="hover:underline" >Sign In</button>
      </p>

     </div>
       

    </div>
    </>
    
  )
}

export default SignUp