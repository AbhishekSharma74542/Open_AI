import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '../store/RootReducer'
import type { AppDispatch } from '../store'

const result = "The paragraph is about the Ukrainian people's courage and determination in the face of Russian aggression. It explains that Vladimir Putin tried to roll into Ukraine and thought he could divide the West, but he was wrong as the West and NATO were prepared. It also explains that the United States, along with other NATO nations, supports the Ukrainian people and their freedom."

export const fetchQuestionAnswer: any = createAsyncThunk<
  any,
  any,
  {
    dispatch: AppDispatch
    state: RootState
  }
>(
  'fetchClusterData',
  async (params = {}, {rejectWithValue }) => {
    try {
      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const setSearchTextQNA: any = createAsyncThunk<
  any,
  any,
  {
    dispatch: AppDispatch
    state: RootState
  }
>(
  'setQNAText',
  async (params = {}, {rejectWithValue }) => {
    try {
      return params
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
