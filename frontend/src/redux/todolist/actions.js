import actionTypes from './types'

function add_todos(payload){
  return {type: actionTypes.ADD_TODOS, payload : payload }
}

function done_todos(payload){
  return {type: actionTypes.DONE_TODOS, payload : payload  }
}

function del_todos(payload){
  return {type: actionTypes.DEL_TODOS, payload : payload  }
}

function get_todos(payload){
  return {type: actionTypes.GET_TODOS, payload : payload }
}

export {
  add_todos,
  done_todos,
  del_todos,
  get_todos
}