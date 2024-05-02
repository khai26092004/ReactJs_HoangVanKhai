import React, { Component } from 'react'

export default class hvkform1 extends Component {
    constructor(props){
        super(props);
        this.state ={
            studentName:"Hoàng Văn Khải"
        }
    }
    //hàm sử lý sự kiện khi thay đổi dữ liệu trên text
    handleChange=(event)=>{
        //cập nhật lại state
        this.setState({
            studentName:event.target.value,
        })
    }
   handleSubmit = (ev)=>{
    console.log(ev);
    ev.preventDefault();
    alert(this.state.studentName)
   }
  render() {
    return (
      <div>
        <h2>Demo ReactJs form - Text</h2>
        <form>
            <lable>Student Name:</lable>
            <input value={this.state.studentName}
                   onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}