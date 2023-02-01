import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='text-lg font-bold mb-10 pt-20 items-center justify-center flex'>
        <h1 className='w-48 text-3xl flex text-center justify-between mb-20 absolute items-center pt-10'>
          <FaUser /> S'inscrire
        </h1>
        <p className='pt-10 '>Créez un compte et commencez à remplir vos objectifs !</p>
      </section>

      <section className='form w-7/12 m-auto'>
        <form onSubmit={onSubmit}>
          <div className='form-group w-7/12 m-auto'>
            <input
              type='text'
              className='form-control w-full p-2 rounded border-solid border-2 border-black mb-10'
              id='name'
              name='name'
              value={name}
              placeholder='Entrez votre nom'
              onChange={onChange}
            />
          </div>
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
              placeholder='Entrez votre mot de passe'
              onChange={onChange}
            />
          </div>
          <div className='form-group w-7/12 m-auto'>
            <input
              type='password'
              className='form-control w-full p-2 rounded border-solid border-2 border-black mb-10'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirmez votre mot de passe'
              onChange={onChange}
            />
          </div>
          <div className='form-group w-7/12 m-auto text-center bg-black rounded h-10 text-xl font-bold text-white'>
            <button type='submit' className='btn btn-block border-solid border-2 border-black w-full h-10 rounded'>
              S'inscrire
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
