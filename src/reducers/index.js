import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import editlist from './editlist'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  editlist,
})

export default todoApp
