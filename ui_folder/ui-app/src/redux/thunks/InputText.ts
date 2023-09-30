import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '../store/RootReducer'
import type { AppDispatch } from '../store'

export const fetchInputText: any = createAsyncThunk<
  any,
  any,
  {
    dispatch: AppDispatch
    state: RootState
  }
>(
  'setInputText',
  async (payload = {}, { rejectWithValue }) => {
    try {
      return payload
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
