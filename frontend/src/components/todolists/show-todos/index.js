import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import styles from './showTodos.module.css'

import { done_todos, del_todos } from '../../../redux/todolist/actions'

class ShowTodos extends Component {
  constructor(props){
    super(props);
    this.todoRef = React.createRef()

    this.showTodo = this.showTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    this.lineThrough = this.lineThrough.bind(this);
  }
  componentDidMount(){
    setTimeout(() => {
      this.lineThrough()
    },1000)
  
  }

  async checkTodo(id){
    const data = this.props.todolists.filter((todo) => {
     return todo.id === id
    })
    const result = await axios.put(`http://127.0.0.1:8000/api/${id}/`,{
      id : data[0].id,
      todo : data[0].todo,
      done : !data[0].done,
    })
    if(result.status === 200){
      this.props.done_todos(id)
    }else {
      alert('Something went wrong')
    }

  }

  async delTodo(id){
    const result = await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
    if(result.status === 204){
      this.props.del_todos(id)
    }else {
      alert('Something went wrong')
    }
  }


  showTodo(){
    const styleLine = {
      
    }
    if(this.props.todolists.length <= 0){
      return (
        <div className={styles.noTodo}>
          There is no Todo
        </div>
      )
    } else{
      return this.props.todolists.map((todolist) => {
        const { id, todo, done } = todolist ;
        return (
          <li key={id} className={styles.todos}> 
            <input checked={done} type="checkbox" onChange={this.checkTodo.bind(this,id)} />
            <span style={{}} className={done ? styles.isDone  : styles.notDone}>{todo}<div className={done ? styles.lines : ''}></div></span>
            <button onClick={this.delTodo.bind(this,id)}>x</button>
          </li>
        )
      })
    }
  }

  lineThrough(){
    if(this.todoRef.current !== null){
      console.log('tewss')
      const liShowTodos = this.todoRef.current.children;
      const spanShowTodos = liShowTodos[0].children[1]
      const lengthText = spanShowTodos.innerText.length
      console.log('textTodos :',lengthText)
      const widthLine = 8*lengthText
      console.log('textTodos :',widthLine)
    }
    
   
    
  
  }


  render() {
  
    return (
      <div ref={this.todoRef} className={styles.container}>
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
    done_todos : (data) => dispatch(done_todos(data)),
    del_todos : (data) => dispatch(del_todos(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos)
