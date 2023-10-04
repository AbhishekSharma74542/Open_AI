import { combineReducers } from '@reduxjs/toolkit'
import inputTextReducer from '../slices/InputText'
import SearchTermReducer from '../slices/SearchTerm'
import StepTwoReducer from '../slices/StepTwo'
import ClusterDataReducer from '../slices/ClusterData'
import QuestionAnswerReducer from '../slices/QuestionAnswer'

const rootReducer = combineReducers({
  inputText: inputTextReducer,
  searchText: SearchTermReducer,
  stepTwo: StepTwoReducer,
  clusterData: ClusterDataReducer,
  QuestionAnswer: QuestionAnswerReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
