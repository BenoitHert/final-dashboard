import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='text-lg font-bold mb-10 pt-20 items-center justify-center flex'>
        <h1 className='w-64 text-3xl flex text-center justify-between mb-20 absolute items-center pt-10'>
          <FaSignInAlt /> Se Connecter
        </h1>
        <p className='pt-10'>Connectez vous et accomplissez vos objectifs !</p>
      </section>

      <section className='form w-7/12 m-auto'>
        <form onSubmit={onSubmit}>
          <div className='form-group w-7/12 m-auto'>
            <input
              type='email'
              className='form-control w-full p-2 rounded border-solid border-2 border-black mb-10'
              id='email'
              name='email'
              value={email}
              placeholder='Entrez votre email'
              onChange={onChange}
            />
          </div>
          <div className='form-group w-7/12 m-auto'>
            <input
              type='password'
              className='form-control w-full p-2 rounded border-solid border-2 border-black mb-10'
              id='password'
              name='password'
              value={password}
              placeholder='Entre votre mot de passe'
              onChange={onChange}
            />
          </div>

          <div className='form-group  w-7/12 m-auto text-center bg-black rounded h-10 text-xl font-bold text-white'>
            <button type='submit' className='btn btn-block border-solid border-2 border-black w-full h-10 rounded'>
              Se connecter
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
