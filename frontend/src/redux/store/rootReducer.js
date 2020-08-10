import { combineReducers } from 'redux';

import todoReducers from '../todolist/reducers';

function rootReducer(){
  return combineReducers({
    todolists : todoReducers
  })
}

export default rootReducer ;