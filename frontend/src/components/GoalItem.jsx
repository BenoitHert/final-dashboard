import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { FaTrash } from 'react-icons/fa'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className=' bg-gray-200 relative '>
      <div>{new Date(goal.createdAt).toLocaleString('fr-FR')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='border-none cursor-pointer absolute top-10 right-15 '>
        <FaTrash/>
      </button>
    </div>
  )
}

export default GoalItem
