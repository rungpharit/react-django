import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddTodos from './add-todos'
import ShowTodos from './show-todos'

class Todolists extends Component {
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
