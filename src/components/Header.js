import React from 'react'
import AppBar from 'material-ui/lib/app-bar';

const Header = () => (
  <AppBar
    title="TODO LIST"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}
    titleStyle={{textAlign: 'center'}}
  />
)

export default Header
