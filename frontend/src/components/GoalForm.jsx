import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <section className='w-70 m-auto'>
      <form onSubmit={onSubmit}>
        <div className='mb-10'>
          <label htmlFor='text'>Nouvel Objectif</label>
          <input
            type='text'
            name='text'
            id='text'
            className='w-full p-10 mb-10 border-solid rounded'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='mb-10'>
          <button className='bg-blue-600 text-white text-center items-center justify-center flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110 w-full mb-20' type='submit'>
            Ajouter un Objectif
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
