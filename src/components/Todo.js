import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

import {faCircle, faCircleNotch, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Todo extends React.Component{

  render(){
    const { onClick, completed, text, onEditClick, onDeleteClick } = this.props
    return (
      <tr>
        <td onClick ={onClick} className = "text-center">
            <FontAwesomeIcon icon ={completed?faCircleNotch:faCircle}/>
        </td>
        <td> {text} </td>
        <td>
          <Button color="info" onClick={onEditClick}>
          <FontAwesomeIcon icon ={faPen}/> Edit</Button> | <Button color="danger" onClick={onDeleteClick} id = "deleteTodo">
          <FontAwesomeIcon icon ={faTrash}/> Delete</Button>
        </td>
      </tr>
    )
  }
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default Todo
