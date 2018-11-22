import expect from 'expect';
import uuid from 'node-uuid';
import { addTodo, editTodo } from '../actions';
import todos from '../reducers/todos';

describe('reducers', () => {
  it('should return the initial state', () => {
    const state = todos(undefined, {});
    expect(state).toEqual([]);
  })

  it('should return state when action is not on reducer', () => {
    const state = todos(undefined, {
      type: 'RANDOM_ACTION'
    });
    
    expect(state).toEqual(state);
  })

  it('should add a new todo to state', () => {
    const state = todos(undefined, addTodo('New todo'));
    expect(state.length).toEqual(1);
    expect(state[0].text).toEqual('New todo');
    expect(state[0].done).toEqual(false);
  })

  it('should edit a todo', () => {
    const todoId = uuid.v4();
    const initialState = [{
      id: todoId,
      text: 'New todo',
      done: false
    }, {
      id: uuid.v4(),
      text: 'Second todo',
      done: true
    }];

    const state = todos(initialState, editTodo({
      id: todoId,
      done: true
    }));

    expect(state[0].done).toEqual(true);
  })
})