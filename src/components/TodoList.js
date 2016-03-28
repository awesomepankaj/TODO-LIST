import React, { PropTypes } from 'react'
import Todo from './Todo'
import List from 'material-ui/lib/lists/list';

const TodoList = ({todos, onTodoClick, onDeleteClick}) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
  <List style={{width: '60%'}}>
    {
      todos.map(todo => 
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onDeleteClick={() => onDeleteClick(todo.id)}
        />         
      )
    }
  </List>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default TodoList
