import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import editorReducer from '../features/editor/editorSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    editor: editorReducer,
  },
})
