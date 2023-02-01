import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { FaTrash } from 'react-icons/fa'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='relative bg-slate-200 h-20 flex content-center text-center rounded border-solid border-2 border-black'>
      <div>{new Date(goal.createdAt).toLocaleString('fr-FR')}</div>
      <h2 className='text-xl font-semibold mt-6'>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='border-none cursor-pointer absolute top-1 right-1 '>
        <FaTrash/>
      </button>
    </div>
  )
}

export default GoalItem
