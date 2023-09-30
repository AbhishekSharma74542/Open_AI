import { combineReducers } from '@reduxjs/toolkit'
import inputTextReducer from '../slices/InputText'

const rootReducer = combineReducers({
  inputText: inputTextReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
