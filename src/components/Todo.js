import React, { PropTypes } from 'react'
import ListItem from 'material-ui/lib/lists/list-item';

const Todo = ({onClick, completed, text}) => (
  <ListItem 
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  {text}
  </ListItem>
)

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
