import { createSlice } from '@reduxjs/toolkit'
import { fetchClusterData } from '../thunks/ClusterData';

export interface clusterDataState {
  error: string | null;
  data: any;
  fetching: boolean | null;
  doneFetching: boolean | null;
}

const initialState: clusterDataState = {
  data: [],
  fetching: false,
  doneFetching: false,
  error: null,
}

export const clusterData = createSlice({
  name: 'cluster',
  initialState,
  reducers: {
    resetClusterData: (state) => {
      state.data = initialState.data
    },
    setInputText: (state, action) => {
      state.data = action.payload
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

export const { resetClusterData, setInputText } = clusterData.actions
export default clusterData.reducer
