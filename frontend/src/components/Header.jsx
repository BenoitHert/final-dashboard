import { FaSignInAlt, FaSignOutAlt, FaUser, FaPen } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import {Si1001Tracklists} from 'react-icons/si'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='relative flex justify-between p-2 md:mx-6 items-center 
    '>
        <Link to="/"
        className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
          <Si1001Tracklists/> <span>Backdash</span>
        </Link>
      <div className='pl-80 pt-2 cursor-pointer font-bold text-xl '>
        Remplissez Vos Objectifs !
      </div>
      <ul className='flex items-center justify-between  '>
        {user ? (
          <li className='ml-20'>
            <button className='bg-blue-600  text-white text-center items-center justify-center flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110' 
            onClick={onLogout}>
              <FaSignOutAlt /> Se Déconnecter
            </button>
          </li>
        ) : (
          <>
          <li className='ml-20'>
              <Link to='/about' className='bg-slate-200 text-black w-full text-center items-center justify-around flex cursor-pointer font-semibold text-base border-solid rounded p-2 mr-8 hover:scale-110'>
                <FaPen  /> A propos
              </Link>
            </li>
            <li className='ml-20'>
              <Link to='/login' className='bg-black text-white w-full text-center items-center justify-around flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110'>
                <FaSignInAlt /> Se Connecter
              </Link>
            </li>
            <li className='ml-20'>
              <Link to='/register' className='bg-black text-white w-full text-center items-center justify-around flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110'>
                <FaUser /> S'inscrire
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
