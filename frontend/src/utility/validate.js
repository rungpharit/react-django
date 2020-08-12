function validateTodo(text){
  let regexTodo = /\w/ig
  let result = regexTodo.test(text)

  return result;
}
export default validateTodo ;



