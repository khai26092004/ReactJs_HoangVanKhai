import React, { useEffect, useState } from 'react'

export default function HvkUseeffect() {
    // state count
    const [count, setCount] =useState(0);
    // hàm xử lý click me 
    const hvkHandleClick =()=>{
        setCount(prev => prev +1);
    }
    // sử dụng hàm useEffect để cập nhật lại title
    useEffect(()=>{
        document.title = ` Hoàng Văn Khải You clicked ${count} times`;
        console.log( `You clicked ${count} times`);
    }
);
    //useEffect tham số thứ 2 là rỗng 
       useEffect(()=>{
        console.log("chạy lần đầu tiên");
       },

       [])
       // deep
       useEffect(()=>{
        console.log ('useEffect count click:{count}',count)
       },[count])
  return (
    <div>
        <h2>demo-useEffect</h2>
        <p>You clicked {count} times</p>
      <button onClick={hvkHandleClick}>
        Click me
      </button>
    </div>
  )
}
