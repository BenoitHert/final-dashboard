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
    <section className='mr-0 w-4/5 m-auto flex justify-around text-center items-center'>
      <form onSubmit={onSubmit}>
        <div className='mb-3 mt-2 text-lg font-bold '>
          <label htmlFor='text'>Nouvel Objectif</label>
          <input
            type='text'
            name='text'
            id='text'
            className='w-full p-2 mb-5 mt-2 border-solid border-2 rounded justify-center align-center border-black'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='mb-0 flex justify-center'>
          <button className='bg-blue-500 text-center items-center justify-center flex cursor-pointer font-bold text-lg border-solid border-2 border-slate-900 rounded p-2 mr-8 hover:scale-110 w-2/3 mb-20' type='submit'>
            Ajouter un Objectif
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
