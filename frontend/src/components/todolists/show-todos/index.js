import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './showTodos.module.css'

class ShowTodos extends Component {
  constructor(props){
    super(props)

    this.showTodo = this.showTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }

  checkTodo(index){
    console.log(index)
  }

  delTodo(index){
    console.log(index)
  }


  showTodo(){
    return this.props.todolists.map((todolist,index) => {
      const { id, todo, done } = todolist ;
      return (
        <li key={index} className={styles.todos}> 
          <input type="checkbox"  onClick={this.checkTodo.bind(this,index)} />
          <span>{todo}</span>
          <button onClick={this.checkTodo.bind(this,index)}>x</button>
        </li>
      )
    })
  }


  render() {
    console.log(this.props.todolists)
    return (
      <div className={styles.container}>
        {this.showTodo()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todolists : state.todolists.todos
  }
}

const mapDispatchToProps  = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos)
