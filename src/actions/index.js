let nextTodo = 0;

export const addTodo = (text) => {
  var id = new Date() + nextTodo++
  return {
    type: 'ADD_TODO',
    id: id,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
