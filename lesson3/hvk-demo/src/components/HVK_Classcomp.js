
import React, { Component } from 'react'

export default class HVK_Classcomp extends Component {
 constructor(props) {
    super(props);
    this.state = {
        firstName:"KHAI",
        lastName:"Van",
        userName:"k22cnt4"
    }
}
render(){
    return (
      <div className='alert alert-danger'>
        <h2>HVK_Classcomponent Demo</h2>
        <hr/>
        <h3>Dữ liệu trong state </h3>
        <h3>Xin chào:{this.state.firstName} {this.state.lastName} </h3>
        <hr/>
        <h3> dữ liệu props </h3>
        <p>Company:{this.props.Company}</p>
        <p>Course:{this.props.course}</p>

      </div>
    )
  }
}
