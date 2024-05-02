import React, { Component } from 'react'

export default class hvkform3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Hoàng Văn Khải",
            age:"20",
            course:"hvk-HTML5",
            gender:true

        }
    }
    hvkhandleChange =(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })

    }
    hvkhandleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);
        //chuyển dữ liệu lên app
        this.props.onSubmit(this.state)
    }
  render() {
    return (
      <div>
        <form>
            <div>
                <lable>Student Name:</lable>
                <input name ='studentName'
                       value={this.state.studentName}
                       onChange={this.hvkhandleChange} />
            </div>
            <div>
            <lable>Age:</lable>
                <input name='age'
                       value={this.state.age}
                       onChange={this.hvkhandleChange} />
            </div>
            <div>
            <lable>Gender:</lable>
                <input type='radio' name='gender'  
                value={true} checked={(this.state.gender===true)?'checked':''}/> Nam
                <input type='radio' name='gender' 
                value={false} checked={(this.state.gender===false)?'checked':''}/> Nữ
            </div>
            <div>
            <lable>course</lable>
            <select name='course'
                value={this.state.course}
                onChange={this.hvkhandleChange} >
                <option value={"hvk-HTML5"}>hvk-HTML5</option>
                <option value={"hvk-CSS3"}>hvk-CSS3</option>
                <option value={"hvk-JS"}>hvk-JS</option>
                <option value={"hvk-RJ"}>hvk-Rj</option>      
            </select>
            </div>
            <button onclick={this.hvkhandleSubmit}>Submit</button> 
        </form>
      </div>
    )
  }
}
