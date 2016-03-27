import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {

    var centerContentStyle = {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center'
    }

    return (
      <div style={centerContentStyle}>
        <form onSubmit={e => {
          e.preventDefault()
          if (!this.state.value.trim()) {
            return 
          }
          this.props.dispatch(addTodo(this.state.value))
          this.setState({value: ''})
        }}
        style={{width: '60%'}}>
          <TextField
            onChange={e => {
              this.setState({value: e.target.value})
            }}
            hintText="Enter Here"
            floatingLabelText="Add New Todo"
            style={{width: '87%'}}
            value={this.state.value}
          />
          <FlatButton label='Add Todo' primary={true} />
        </form>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
