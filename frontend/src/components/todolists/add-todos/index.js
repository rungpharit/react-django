import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import styles from './addTodos.module.css'
import validateTodo from '../../../utility/validate';
import { add_todos } from '../../../redux/todolist/actions'

export class AddTodos extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo : "",
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

  async sendTodo(){
    const isText = validateTodo(this.state.todo)
    if(isText){
      this.setState({
        ...this.state,
        todo : ''
      })
      const result = await axios.post('http://127.0.0.1:8000/api/',{
        todo :   this.state.todo,
      })
      if(result.status === 201){
        this.props.add_todos(result.data)
      }
    }else{
      alert("please type again")
    }
  }


  render() {
    return (
      <div className={styles.container}>
        <input placeholder="Joi Something Down !" type="text" name="todo" onChange={this.addTodoHandler} value={this.state.todo}/>
        <button onClick={() => {this.sendTodo()}}>SAVE</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps  = dispatch => {
  return {
    add_todos : (data) => dispatch(add_todos(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodos)
