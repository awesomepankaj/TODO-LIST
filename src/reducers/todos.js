import _ from 'lodash';

const todo = (state, action) => {
  let getTodos = JSON.parse(localStorage.getItem('todos')) || []
  switch (action.type) {
    case 'ADD_TODO': 
      let newTodo = {
        id: action.id,
        text: action.text,
        completed: false
      }
      getTodos.push(newTodo) 
      localStorage.setItem('todos', JSON.stringify(getTodos));
      return newTodo
    case 'TOGGLE_TODO': 
      if (state.id !== action.id) {
        return state 
      } 

      let modifiedTodo = Object.assign({}, state, {
        completed: !state.completed
      })
      let index = _.findIndex(getTodos, _.pick(modifiedTodo, 'id')) 
      getTodos.splice(index, 1, modifiedTodo)
      localStorage.setItem('todos', JSON.stringify(getTodos));
      return modifiedTodo
    case 'DELETE_TODO':
      console.log(state, action)
      var newState = _.remove(state, (t) => {
        return t.id !== action.id
      })
      var todos = _.remove(getTodos, (t) => {
        return t.id !== action.id
      })

      localStorage.setItem('todos', JSON.stringify(todos));
      console.log(newState)
      return newState

    default:
      return state
  }
}
let storeTodos = JSON.parse(localStorage.getItem('todos')) || []
const todos = (state = storeTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map((t) => 
        todo(t, action)                
      )
    case 'DELETE_TODO':
      return todo(state, action)
    default: 
      return state
  }
}

export default todos
