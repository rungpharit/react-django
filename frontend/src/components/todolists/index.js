import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AddTodos from './add-todos';
import ShowTodos from './show-todos';



class Todolists extends Component {

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        console.log('res : ',res.data)
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
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolists)
