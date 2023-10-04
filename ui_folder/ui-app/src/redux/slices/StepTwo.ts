import { createSlice } from '@reduxjs/toolkit'
import { fetchStepTwo } from '../thunks/StepTwo'

const initialState = {
  data: "semantic",
  updating: false,
  doneUpdating: false,
}

export const stepTwo = createSlice({
  name: 'stepTwo',
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
      .addCase(fetchStepTwo.pending, (state) => {
        state.updating = true
      })
      .addCase(fetchStepTwo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.updating = false
        state.doneUpdating = true
      })
  },
})

export const { resetInputPage, setInputText } = stepTwo.actions
export default stepTwo.reducer
