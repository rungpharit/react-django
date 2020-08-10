import actionTypes from './types';

const initialState = {
  todos : [
    {
      id:1,
      todo : 'test 1',
      done : false
    },
    {
      id:2,
      todo : 'test 2',
      done : true
    },
  ],
};


function todoReducers(state=initialState,action){
  switch(action.types){
    case actionTypes.ADD_TODOS :
      return 1 ;
    case actionTypes.DONE_TODOS :
      return 2 ;
    case actionTypes.DEL_TODOS :
      return 3 ;
    case actionTypes.GET_TODOS :
      return 4 ;
    default :
    return state ;
  }
}

export default todoReducers ;

