import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './Header'


injectTapEventPlugin();
const App = () => (
  <div style={{width: '100%'}}>
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
