import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '../store/RootReducer'
import type { AppDispatch } from '../store'
import { SEARCH_TERM } from '../../lib/ApiConstant'

export const fetchSearchText: any = createAsyncThunk<
  any,
  any,
  {
    dispatch: AppDispatch
    state: RootState
  }
>(
  'fetchSearchText',
  async (params = {}, { getState, rejectWithValue }) => {
    try {
      const { inputText: { data } } = getState()

      const response = await fetch(`${SEARCH_TERM}?search_term=${data}`);
      const result = await response.json();

      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
