import React from 'react'
import { connect } from 'react-redux'
import { addTodo, changeState } from '../actions'
import  { saveTodo } from '../actions'

const mapStateToProps = (state) => ({
  id: state.editlist.id,
  text: state.editlist.text,
  flag: state.editlist.flag 
})

let AddTodo = ({ dispatch, id=0, text='', flag=false}) => {
  let input
  let btnlabel = flag ? 'Save': 'Add Todo'

  console.log(input)
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        if (flag === false)
          dispatch(addTodo(input.value))
        else{
          dispatch(saveTodo(input.value, id))
          dispatch(changeState())
        }
        input.value = ''
      }}>
        <input ref={node => {
          input = node
          if (input != null) {
            input.value = text
          }
        }} />
        <button type="submit">
          {btnlabel}
        </button>
      </form>
    </div>
  )
}
AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
