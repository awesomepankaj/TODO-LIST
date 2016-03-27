import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/lib/flat-button';

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <FlatButton
      style={{width: '20%'}}
      primary={true}
      onClick={(e) => {
        e.preventDefault()
        onClick()
    }}>
      {children}
    </FlatButton>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
