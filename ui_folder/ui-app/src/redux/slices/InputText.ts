import { createSlice } from '@reduxjs/toolkit'
import { fetchInputText } from '../thunks/InputText'

const initialState = {
  data: [],
  updating: false,
  doneUpdating: false,
}

export const inputText = createSlice({
  name: 'textAnalysis',
  initialState,
  reducers: {
    resetInputPage: (state) => {
      state.data = initialState.data
    },
    setInputText: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInputText.pending, (state) => {
        state.updating = true
      })
      .addCase(fetchInputText.fulfilled, (state, action) => {
        state.data = action.payload;
        state.updating = false
        state.doneUpdating = true
      })
  },
})

export const { resetInputPage, setInputText } = inputText.actions
export default inputText.reducer
