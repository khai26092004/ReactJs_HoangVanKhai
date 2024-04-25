import React, { Component } from 'react'

export default class HVK_EventForm4 extends Component {
    constructor(props){
        super(props)
        this.state={
                name:"Văn Khải"
        }
    }
    handleChangeName=()=>{
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div>
        <h2>Lấy dữ liệu từ props</h2>
        <button onClick={this.handleChangeName}>Lấy tên từ props</button>
        <h2>Wellcome {this.state.name}</h2>
      </div>
    )
  }
}

