import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AddTodos from './add-todos';
import ShowTodos from './show-todos';
import { get_todos } from '../../redux/todolist/actions'



class Todolists extends Component {

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.props.get_todos(res.data)
      })
  }

  render() {
    return (
      <div>
        <AddTodos/>
        <ShowTodos/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => {
  return {
    get_todos : (data) => dispatch(get_todos(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolists)
