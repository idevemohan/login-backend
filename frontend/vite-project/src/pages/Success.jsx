import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate()

    const handleSignIn = () => {
      navigate("/signin")
    }

  return (
    <div className='relative bg-[url("./assets/bg1.jpg")] bg-cover h-screen w-screen flex flex-col justify-center items-center'>

        <h1 className='absolute top-0 left-0 m-6 text-6xl font-extrabold text-red-600 ' >
          NETFLIX
        </h1>
         <div className=' text-center text-white border-none backdrop-brightness-50 rounded-xl p-10 w-[500px] max-h-full overflow-y-auto'>
                
            <h1 className='text-3xl font-bold '>
                You are Successfully Signed in...
                
            </h1>

            <button className='text-xl border border-red-600 bg-red-600 mt-5 rounded-lg w-3/4 p-3 '
               onClick={handleSignIn}
            >
              Return
            </button>
        </div>        

    </div>
  )
}

export default Success