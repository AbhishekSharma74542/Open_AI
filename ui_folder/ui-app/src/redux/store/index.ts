import { Action, configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import rootReducer from './RootReducer'

const Store = () =>
  configureStore({
    reducer: rootReducer,
  })

export type AppStore = ReturnType<typeof Store>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const storeInstance = Store()
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeInstance.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeInstance.dispatch
