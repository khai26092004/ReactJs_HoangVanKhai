import React, { Component } from 'react'
import HvkProductList from './components/HvkProductList';
import HvkProductAdd from './components/HvkProductAdd';

export default class App extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      products : [
        { title: 'Hoàng Văn Khải', id: 22109000109 , status:1 },
        { title: 'Cabbage', id: 1 ,status:1},
        { title: 'Garlic', id: 2 ,status:1},
        { title: 'Apple', id: 3, status:1 },
        { title: 'SamSung', id: 4 ,status:1},
      ]
    }
  }
  render() {
    return (
      <div className='container border mt-5' >
        <h1>Hoàng Văn Khải - Render Data - Event Form</h1>
         <hr/>
         <HvkProductList renderProducts={this.state.products}/> 
         <hr/>
         <HvkProductAdd />
      </div>
    );
  }
}
