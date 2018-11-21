import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({todos, onTodoClick, onEditTodoClick, onDeleteTodoClick })=>(
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> Item list
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th width="5%">Status</th>
                    <th className = "text-center">Content</th>
                    <th width ="20%">Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    todos.filter(t => !t.deleted).map( todo =>
                    <Todo
                      key={todo.id}
                      {...todo}
                      onClick={() => onTodoClick(todo.id)}
                      onEditClick={() => onEditTodoClick(todo.id, todo.text)}
                      onDeleteClick={() => onDeleteTodoClick(todo.id)}
                    />
                  )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onEditTodoClick: PropTypes.func.isRequired,
  onDeleteTodoClick: PropTypes.func.isRequired
}

export default TodoList
