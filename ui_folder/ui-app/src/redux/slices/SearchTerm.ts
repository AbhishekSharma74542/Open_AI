import { createSlice } from '@reduxjs/toolkit'
import { fetchSearchText } from '../thunks/SearchText'

export interface SearchTextState {
  error: string | null;
  data: any;
  fetching: boolean | null;
  doneFetching: boolean | null;
}

const initialState: SearchTextState = {
  data: [],
  fetching: false,
  doneFetching: false,
  error: null,
}

export const searchTerm = createSlice({
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
      .addCase(fetchSearchText.pending, (state) => {
        state.fetching = true
      })
      .addCase(fetchSearchText.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetching = false
        state.doneFetching = true
      })
      .addCase(fetchSearchText.rejected, (state, action) => {
        state.error = action.error.message;
      });      
  },
})

export const { resetInputPage, setInputText } = searchTerm.actions
export default searchTerm.reducer
