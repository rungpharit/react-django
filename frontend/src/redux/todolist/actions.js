import actionTypes from './types'

function add_todos(){
  return {type: actionTypes.ADD_TODOS }
}

function done_todos(){
  return {type: actionTypes.DONE_TODOS }
}

function del_todos(){
  return {type: actionTypes.DEL_TODOS }
}

function get_todos(){
  return {type: actionTypes.GET_TODOS }
}

export {
  add_todos,
  done_todos,
  del_todos,
  get_todos
}