import React, { Component } from 'react'

export default class hvkform2 extends Component {
  //1.
  constructor(props){
    super(props);
    this.state = {
        course:"hvk-HTML5"
    }
}
// 3hàm sử lý sự kiện
handleChange = (event)=>{
    //cập nhật state
    this.setState({
        course:event.target.value
    })
}
//4.
hvkhandleSubmit= (event)=>{
    event.preventDefault();
    alert(this.state.course)
}
render() {
return (
  <div>
    <form onSubmit={this.hvkhandleSubmit}>
        <lable>course</lable>
        <select value={this.state.course}
            onChange={this.hvkhandleChange} >
            <option value={"hvk-HTML5"}>hvk-HTML5</option>
            <option value={"hvk-CSS3"}>hvk-CSS3</option>
            <option value={"hvk-JS"}>hvk-JS</option>
            <option value={"hvk-RJ"}>hvk-Rj</option>      
        </select>
         <input type='submit' value={"Submit"}/>
    </form>
  </div>
)
}
}
