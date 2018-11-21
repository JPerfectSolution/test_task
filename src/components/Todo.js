import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const Todo = ({ onClick, completed, text, onEditClick }) => (
  <div>
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
  <Button onClick={onEditClick}>Edit List</Button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired
}

export default Todo
