import React, { Component } from 'react'
import Hvkform1 from './components/Hvkform1';
import Hvkform2 from './components/Hvkform2';
import Hvkform3 from './components/Hvkform3';
export default class App extends Component {
  hvkSubmit = (param)=>{
    console.log ("App:",param);
  }
  render() {
    return (
      <div><h1>controlled Component ReactJs form</h1>
      <Hvkform1/>
      <Hvkform2/>
      <hr/>
      <Hvkform3 onsubmit={this.hvkSubmit}/>
      </div>
    )
  }
}