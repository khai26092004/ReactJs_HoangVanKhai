import React from 'react'

export default function HVK_EventForm2() {
    const eventhandleclick1 =(content)=>{
        console.log('====================');
        console.log(content);
        console.log('====================');
    }
  return (
    <div className='alert alert-success'>
        <h2>event demo-function Component</h2>
        <button onClick={eventhandleclick1("Hoàng Văn Khải")}>gọi khi render</button>
        <button onClick={()=> eventhandleclick1("K22CNTT4")}>gọi khi click</button>
    </div>
  )
}

