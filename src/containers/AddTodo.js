import React from 'react'
import { connect } from 'react-redux'
import { addTodo, changeState } from '../actions'
import  { saveTodo } from '../actions'
import {Button, Row, Col, Card, CardHeader, CardBody} from 'reactstrap'
import './AddTodo.scss'

const mapStateToProps = (state) => ({
  id: state.editlist.id,
  text: state.editlist.text,
  flag: state.editlist.flag 
})

let AddTodo = ({ dispatch, id=0, text='', flag=false}) => {
  let input
  let btnlabel = flag ? 'Update': 'Add Item'
  
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardHeader>
            <span className="h1">Test Task</span>
            </CardHeader>
            <CardBody>
              <Row>
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
                  <input className='AddTodo' ref={node => {
                    input = node 
                    if (input != null) {
                      input.value = text
                    }
                  }} placeholder='Input Content(*This style is scss style.*)' required/> <Button color="success" type='submit' size="sm" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i>
                    {btnlabel}
                  </Button>
                </form>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>      
    </div>
  )
}
AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
