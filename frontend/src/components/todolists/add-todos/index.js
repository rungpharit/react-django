import React, { Component } from 'react'
import { connect } from 'react-redux'

import validateTodo from '../../../utility/validate';
import { add_todos } from '../../../redux/todolist/actions'

export class AddTodos extends Component {
  constructor(props){
    super(props)
    this.state = {
      id : 3,
      todo : "",
      done : false
    }

    this.addTodoHandler = this.addTodoHandler.bind(this)
    this.sendTodo = this.sendTodo.bind(this)
  }

  addTodoHandler(e){
    this.setState({
      ...this.state,
      todo : e.target.value
    })
  }

  sendTodo(){
    const isText = validateTodo(this.state.todo)
    if(isText){
      this.props.add_todos(this.state)
      this.setState({
        ...this.state,
        todo : ''
      })
    }else{
      alert("please type again")
    }
  }


  render() {
    return (
      <div>
        <input type="text" name="todo" onChange={this.addTodoHandler} value={this.state.todo}/>
        <button onClick={() => {this.sendTodo()}}>SAVE</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return  {
    
  }
}
const mapDispatchToProps  = dispatch => {
  return {
    add_todos : (data) => dispatch(add_todos(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodos)
