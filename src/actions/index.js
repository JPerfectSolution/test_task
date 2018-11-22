export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  id,
  text
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
})

export const saveTodo = (text, id) => ({
  type: 'SAVE_TODO',
  id,
  text
})

export const changeState = () => ({
  type: 'CHANG_STATE',
})
