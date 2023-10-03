import { combineReducers } from '@reduxjs/toolkit'
import inputTextReducer from '../slices/InputText'
import SearchTermReducer from '../slices/SearchTerm'

const rootReducer = combineReducers({
  inputText: inputTextReducer,
  searchText: SearchTermReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
