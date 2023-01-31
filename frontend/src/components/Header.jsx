import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

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
    <header className='flex justify-between p-2 md:mx-6
    relative'>
      <div className='pl-80 pt-2 text-white  cursor-pointer font-bold text-xl'>
        <Link to='/'>Remplissez Vos Objectifs !</Link>
      </div>
      <ul className='flex items-center justify-center '>
        {user ? (
          <li className='ml-20'>
            <button className='bg-blue-600 text-white text-center items-center justify-center flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110' 
            onClick={onLogout}>
              <FaSignOutAlt /> Se Déconnecter
            </button>
          </li>
        ) : (
          <>
            <li className='ml-20'>
              <Link to='/login' className='flex items-center'>
                <FaSignInAlt /> Se Connecter
              </Link>
            </li>
            <li className='ml-20'>
              <Link to='/register' className='flex items-center'>
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
