import React, { PropTypes } from 'react'
import ListItem from 'material-ui/lib/lists/list-item';
import styles from 'material-ui/lib/styles';
import Avatar from 'material-ui/lib/avatar';
import ActionAssignment from 'material-ui/lib/svg-icons/action/assignment';
import IconButton from 'material-ui/lib/icon-button';
import Done from 'material-ui/lib/svg-icons/action/done';
import Restore from 'material-ui/lib/svg-icons/action/restore';
import Delete from 'material-ui/lib/svg-icons/action/delete';

var colors = styles.Colors
const Todo = ({onClick, onDeleteClick, completed, text}) => (
  <ListItem 
    leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={colors.blue500} />}
    rightIconButton={
      <div>
      {completed ? <IconButton 
        tooltip="restore" 
        onClick={onClick}
      >
        <Restore />
      </IconButton>
      : <IconButton 
        tooltip="Done" 
        onClick={onClick}
      >
        <Done />
      </IconButton>}
      {completed && <IconButton
        tooltip="delete"
        onClick={onDeleteClick}>
          <Delete />
        </IconButton>
      } 
      </div>
    }
    style={{
      opacity: completed ? 0.5 : 1
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
