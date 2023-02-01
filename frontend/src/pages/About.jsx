import React from 'react'
import {FaUser, FaSignInAlt, FaAddressCard} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function About() {

  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <h1 className='pl-80 pt-20 font-bold text-xl'>A propos de nous !</h1>
      <p className='text-lg font-semibold pl-80 pt-10'>
        Cette application a pour but de faciliter la gestion d'un emploi du temps.
      </p>

      <p className='text-lg font-semibold pl-80 pt-10'>
        Des choses à faire ? Un rdv ? Mais vous ne savez pas comment vous organiser ?
      </p>

      <p className='text-lg font-semibold pl-80 pt-10'>
        Essayez backdash pour remplir vos objectifs !
      </p>
      <div className='flex items-center align-middle justify-around text-center pt-10 '>
      <ul className='mr-20 w-1/3pt-20 justify-around space-x-2 flex text-center'>
      {user ? (
            <li >
              <Link to='/' className='bg-black text-white w-full text-center items-center justify-center flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110'>
                <FaAddressCard /> Je commence !
              </Link>

            </li>
      
          ) : (
            <>
          <li >
              <Link to='/login' className='bg-black text-white w-full text-center items-center justify-center flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110'>
                <FaSignInAlt /> Je me connecte !
              </Link>
            </li>
      
            <li className='ml-20'>
              <Link to='/register' className='bg-black text-white w-full text-center items-center justify-center flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110'>
                <FaUser /> Je m'inscris !
              </Link>
            </li>
            </>
      )}
      </ul>
      </div>

    </div>
  )
}

export default About