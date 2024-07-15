import React, { useEffect, useState } from 'react'
import axios from '../hvk_apis/hvk-2210900109'

export default function HvkFormTableName({renderHvkTableName, onHvkEdit}) {
  const [hvkId, setHvkId] = useState(renderHvkTableName.hvkId)
  const [hvkTbName, setHvkTbName] = useState(renderHvkTableName.hvkTbName)
  const [hvkTbEmail, setHvkTbEmail] = useState(renderHvkTableName.hvkTbEmail)
  const [hvkTbPhone, setHvkTbPhone] = useState(renderHvkTableName.hvkTbPhone)
  const [hvkTbStatus, setHvkTbStatus] = useState(renderHvkTableName.hvkTbStatus)
useEffect(()=>{
  setHvkId(renderHvkTableName.hvkId)
  setHvkTbName(renderHvkTableName.hvkTbName)
  setHvkTbEmail(renderHvkTableName.hvkTbEmail)
  setHvkTbPhone(renderHvkTableName.hvkTbPhone)
  setHvkTbStatus(renderHvkTableName.hvkTbStatus)
},[renderHvkTableName])
  const hvkHandleSubmit = async (hvkEvent) =>{  
    hvkEvent.preventDefault();
    const hvkObjTableName = {
      "hvkTbName": hvkTbName,
      "hvkTbEmail": hvkTbEmail,
      "hvkTbPhone": hvkTbPhone,
      "hvkTbStatus": hvkTbStatus,
      "hvkId": hvkId
    }
    console.log(hvkObjTableName);
    // thêm mới dữ liệu vào trong api 
    await axios.put("hvkTableName/"+hvkObjTableName.hvkId,hvkObjTableName);
    onHvkEdit();
  }
  return (
    <div>
      <h2>Form xử lý dữ liệu thông tin  </h2>
      <form>
        <div class="input-group mb-3">
          <span className="input-group-text" id="hvkId">hvkId</span>
          <input type="text" className="form-control" placeholder="hvkId"
            name='hvkId'
            value={hvkId}
            onChange={(hvkEv) => setHvkId(hvkEv.target.value)}
            aria-label="hvkId"
            aria-describedby="hvkId" />
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text" id="hvkTbName">hvkTbName</span>
          <input type="text" className="form-control" placeholder="hvkTbName"
            name='hvkTbName'
            value={hvkTbName}
            onChange={(hvkEv) => setHvkTbName(hvkEv.target.value)}
            aria-label="hvkTbName"
            aria-describedby="hvkTbName" />
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text" id="hvkTbEmail">hvkTbEmail</span>
          <input type="text" className="form-control" placeholder="khai135668@gmail.com"
            name='hvkTbEmail'
            value={hvkTbEmail}
            onChange={(hvkEv) => setHvkTbEmail(hvkEv.target.value)}
            aria-label="hvkTbEmail"
            aria-describedby="hvkTbEmail" />
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text" id="hvkTbPhone">hvkTbPhone</span>
          <input type="text" className="form-control" placeholder="0866983529"
            name='hvkTbPhone'
            value={hvkTbPhone}
            onChange={(hvkEv) => setHvkTbPhone(hvkEv.target.value)}
            aria-label="hvkTbPhone"
            aria-describedby="hvkTbPhone" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="hvkTbStatus">hvkTbStatus</span>
          <select id='hvkStatus' className='form-control'
            name='hvkTbStatus'
            value={hvkTbStatus}
            onChange={(hvkEv) => setHvkTbStatus(hvkEv.target.value)}
          >
            <option value={true}>Active</option>
            <option value={false}>Non-Active</option>
          </select>

        </div>
        <button className='btn btn-primary my-3' name='btnHvkSave' onClick={hvkHandleSubmit}> Hvk: Save </button>
      </form>
    </div>
  )
}
