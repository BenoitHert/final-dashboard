import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Spinner from '../components/Spinner'
import { FaAddressCard } from 'react-icons/fa'

function UserPage() {
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
    
        if (!user) {
          navigate('/login')
        }
    
      }, [user, navigate])
    
    //   if (isLoading) {
    //     return <Spinner />
    //   }

  return (
    <div classname='pl-80 pt-20  bg-green-300' > 
        <div className='flex pl-80 pt-20 text-center justify-around' > 
        <h1 className='mb-6 pt-20 text-2xl font-black absolute capitalize'>Bienvenue {user && user.name}</h1>

        <button className='bg-blue-600 mt-80 text-white text-center items-center justify-center flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110' 
            >
              <FaAddressCard /> Changer de mot de passe
            </button>
        </div>



    </div>
  )
}

export default UserPage