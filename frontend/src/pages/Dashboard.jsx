import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <div className='h-32 w-full pt-20 '>
      <section className='bg-slate-100 flex justify-around items-center p-3 mr-0 m-auto w-full pl-80 pr-2 '
      style={{ zIndex: '-500'}}>
        <h1 className='mb-6 text-2xl font-black absolute'>Bienvenue {user && user.name}</h1>
        <p className='text-slate-400 text-lg font-bold mt-6'>Tableau des Objectifs</p>
      </section>

      <GoalForm />

      <section className='mr-0 w-4/5 m-auto flex  justify-around'>
        {goals.length > 0 ? (
          <div className='grid grid-cols-2 gap-x-14 gap-y-4'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Vous n'avez rien à faire !</h3>
        )}
      </section>
      </div>
    </>
  )
}

export default Dashboard
