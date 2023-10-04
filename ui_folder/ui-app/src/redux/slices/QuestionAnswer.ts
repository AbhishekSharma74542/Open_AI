import { createSlice } from '@reduxjs/toolkit'
import { fetchClusterData } from '../thunks/ClusterData';

export interface QnAState {
  error: string | null;
  data: any;
  text: string | null;
  fetching: boolean | null;
  doneFetching: boolean | null;
}

const initialState: QnAState = {
  data: "",
  text: "",
  fetching: false,
  doneFetching: false,
  error: null,
}

export const questionAnswer = createSlice({
  name: 'QnA',
  initialState,
  reducers: {
    resetQnAData: (state) => {
      state.data = initialState.data
    },
    setInputText: (state, action) => {
      state.data = action.payload
    },
    setQNASearchText: (state, action) => {
      state.text = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClusterData.pending, (state) => {
        state.fetching = true
      })
      .addCase(fetchClusterData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetching = false
        state.doneFetching = true
      })
      .addCase(fetchClusterData.rejected, (state, action) => {
        state.error = action.error.message;
      });      
  },
})

export const { resetQnAData, setInputText, setQNASearchText } = questionAnswer.actions
export default questionAnswer.reducer
