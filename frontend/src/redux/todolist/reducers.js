import actionTypes from './types';

const initialState = {
  todos : [

  ],
};


function todoReducers(state=initialState,action){
  switch(action.type){
    case actionTypes.ADD_TODOS :  
    const newTodos = [...state.todos]
    newTodos.push(action.payload)
      return {
        ...state,
        todos : [
         ...newTodos
        ]
      } ;
    case actionTypes.DONE_TODOS :
      const changeDone = state.todos.map((todo) => {  
        if(todo.id === action.payload){
          return {
            id : todo.id,
            todo : todo.todo,
            done :!todo.done
          }
        }else{
          return {...todo}
        }
      })
      return {
        ...state,
        todos : [...changeDone]
      }
    case actionTypes.DEL_TODOS :
      const new_data = state.todos.filter((todo) => {
        return todo.id !== action.payload
      })
      console.log('del;' ,new_data)
      return {
        todos : [...new_data]
      } ;
    case actionTypes.GET_TODOS :
      return {
        ...state,
        todos : [
         ...action.payload
        ]
      }  ;
    default :
    return state ;
  }
}

export default todoReducers ;

