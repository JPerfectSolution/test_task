import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { addTodo } from '../actions'

class App extends Component{
  componentDidMount(){
    const {dispatch} = this.props
    fetch('./public/resources/test.json')
      .then(response => response.json())
      .then(json => {
        return json.todos.map(t =>
          dispatch(addTodo(t.text))
        )
      })
  }
  
  render(){
    return (
      <div className="container-fluid">
        <div className = "animated fadeIn">
          <AddTodo class = "row" />
          <VisibleTodoList class = "row" />
        </div>
      </div>
    )
  }
}


App.propTypes = {
  dispatch: PropTypes.func.isRequired
}
export default connect(null, null)(App)
