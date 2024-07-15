import React, { useEffect, useState } from 'react'
import HvkListTableName from './hvk_components/HvkListTableName'
import axios from './hvk_apis/hvk-2210900109'
import HvkFormTableName from './hvk_components/HvkFormTableName'

export default function HvkApp() {
   // đọc giữ liệu từ api 
   const [hvkListTableName, setHvkListTableName] = useState([])
   const hvkGetTableName = async ()=>{
   let hvkResp = await axios.get("hvkTableName");
   console.log("App list ..... :",hvkResp.data);
   setHvkListTableName(hvkResp.data);
   }
 
   useEffect (()=>{
    hvkGetTableName();
   },[]) 
   // hàm xóa 
   const hvkHanldeDelete= async (hvkId)=>{
   let hvkRes= await axios.delete("hvkTableName/"+hvkId);
    hvkGetTableName();
   }
   const hvkObjTableName ={
    "hvkTbName": "Hoàng Văn Khải",
    "hvkTbEmail": "khai135568@gmail.com",
    "hvkTbPhone": "0866983529",
    "hvkTbStatus": true,
    "hvkId": "22109001909"
   };
   const [hvkTableName,setHvkTableName] = useState(hvkObjTableName);
   //const hvkHandleAdd = ()=>{
    //hvkGetTableName();
    const hvkHandelEdit = ()=>{
      hvkGetTableName();
  }
  const hvkHandleEdit = (onHvkEditTableName)=>{
    setHvkTableName(onHvkEditTableName)
  }
  return (
    <div className='container border my-3'>
     <h1>Bài đánh giá học hết học phần  - Hoàng Văn Khải - 2210900109</h1> 
     <hr/>
     <HvkListTableName renderHvkListTableName={hvkListTableName} onHvkDelete={hvkHanldeDelete} onHvkEdit={hvkHandleEdit}/>
     <hr/>
     <HvkFormTableName renderHvkTableName={hvkTableName}  onHvkEdit={hvkHandelEdit} />
    </div>
  )
}
