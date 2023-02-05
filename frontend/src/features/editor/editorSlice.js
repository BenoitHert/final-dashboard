import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import editorService from './editorService'

const initialState = {
    editor: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new Editor
export const createEditor = createAsyncThunk(
    'editor/create',
    async(_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await editorService.createEditor(token)
          } catch (error) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
          }
    }
)

// Get user Notes
export const getEditor = createAsyncThunk(
  'editor/get',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await editorService.getEditor(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// update user Notes
export const updateEditor = createAsyncThunk(
    'editor/update',
    async (editorData, thunkAPI) => {
try {
    const token = thunkAPI.getState().auth.user.token
    return await editorService.updateEditor(editorData, token)
} catch (error) {
    const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
}
    }
)

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createEditor.pending, (state) => {
            state.isLoading = true
          })
          .addCase(createEditor.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
          })
          .addCase(createEditor.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(getEditor.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getEditor.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.editor = action.payload
          })
          .addCase(getEditor.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(updateEditor.pending, (state) => {
            state.isLoading = true
          })
          .addCase(updateEditor.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.editor = action.payload
          })
          .addCase(updateEditor.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          }) 
    }
})

export const { reset } = editorSlice.actions
export default editorSlice.reducer