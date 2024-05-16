import React,{useState} from 'react'

export default function HvkUseState() {
      // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);
  // mảng 
  const [list, setList]=useState([1,5]);
  // Hàm xử lý sự kiện biến đổi "thêm ngẫu nhiên "
 const hvkHandlelist = ()=>{
    // sinh ngẫu nhiên một giá trị số 
    let num =parseInt(Math.random()*100);
    // cập nhật state ; list 
    setList([
      ... list,
      num
    ])
    //cách khác 
   // let lst=list.push(num);
    //setList(lst);
  }
  return (
    <div>
  <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={hvkHandlelist}>Thêm ngẫu nhiên</button>
    </div>
  )
}
