import React from 'react'

export default function HvkListTableName({renderHvkListTableName,onHvkDelete,onHvkEdit}) {
   console.log("List",renderHvkListTableName);
   // Hiện thị dữ liệu 
   const hvkElementTableName = renderHvkListTableName.map((hvkItem,hvkIndex)=>{
    return(
        <tr key={hvkIndex}>
            <td>{hvkItem.hvkId}</td>
            <td>{hvkItem.hvkTbName}</td>
            <td>{hvkItem.hvkTbEmail}</td>
            <td>{hvkItem.hvkTbPhone}</td>
            <td>{(hvkItem.hvkTbStatus=== true || hvkItem.hvkTbStatus=== "true")?"Active":"Non-Active"}</td>
            <td>
                <button className='btn btn-success m-2'
                onClick={()=>hvkHandelEdit(hvkItem)}
                >hvk-edit</button>
                <button className='btn btn-danger'
                 onClick={()=>hvkHanldeDelete(hvkItem.hvkId)}
                >hvk-delete</button>
            </td>
        </tr>
    );
   })
   // sự kiện xóa 
   const hvkHanldeDelete = (hvkId)=>{
     if(window.confirm('Bạn có muốn xóa dữ liệu có hvkId='+ hvkId)){
        onHvkDelete(hvkId);
     }
   }
   // Sửa 
   const hvkHandelEdit=(hvkObjTbName)=>{
    onHvkEdit(hvkObjTbName)

   }
  return (
    <div>
        <h2>danh sách thông tin ... </h2>
        <hr/>
        <table className='table table-bordered'> 
        <thead>
            <tr>
                <th>hvkId</th>
                <th>hvkTbName</th>
                <th>hvkTbEmail</th>
                <th>hvkTbPhone</th>
                <th>hvkTbStatus</th>
                <th>hvk:chức năng</th>
            </tr>
        </thead>
        <tbody>
             {hvkElementTableName}
        </tbody>
        </table>
    </div>
  )
}
