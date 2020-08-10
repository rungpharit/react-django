import { combineReducers } from 'redux';

import todoReducers from '../todolist/reducers';


const rootReducer = combineReducers({
  todolists : todoReducers
})



export default rootReducer ;