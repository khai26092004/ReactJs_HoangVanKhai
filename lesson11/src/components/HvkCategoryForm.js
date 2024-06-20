import React, { useEffect, useState } from "react";
import axios from "../api/HvkApi";

export default function HvkCategoryForm({ onCloseForm, onHvkCategorySubmit, renderHvkCategory }) {
  const [hvkId,setHvkId]=useState("")
  const [hvkCategoryName, setHvkCategoryName] = useState("");
  const [hvkCategoryStatus, setHvkCategoryStatus] = useState(true);
  useEffect(()=>{
  setHvkId(renderHvkCategory.hvkId);
  setHvkCategoryName(renderHvkCategory.hvkCategoryName);
  setHvkId(renderHvkCategory.hvkCategoryStatus);
  },[renderHvkCategory])

  const hvkHandleClose = (event) => {
    event.preventDefault();
    onCloseForm(false);
  };

  const hvkHandleSubmit = async (event) => {
    event.preventDefault();
    let hvkCategory = {
      hvkId: hvkId,
      hvkCategoryName: hvkCategoryName,
      hvkCategoryStatus: hvkCategoryStatus 
    }
    if(hvkId===0){// thêm
    
    await axios.post("/HvkCategory", hvkCategory);
    onHvkCategorySubmit(newCategory);
    }else{// sửa
      await axios.put(`/HvkCategory/${renderHvkCategory.hvkId}`, hvkCategory);
      onHvkCategorySubmit(hvkCategory);
    } 
    
    await axios.post("/HvkCategory", hvkCategory)
    // onHvkCategorySubmit(newCategory)
    console.log("Add: ", hvkCategory);

    const response = await axios.post("/HvkCategory", hvkCategory);
    const newCategory = response.data;

    onHvkCategorySubmit(newCategory);
  };

  return (
    <div>
      <form onSubmit={hvkHandleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Category Name
          </span>
          <input
            type="text"
            name="hvkCategoryName"
            value={hvkCategoryName}
            onChange={(ev) => setHvkCategoryName(ev.target.value)}
            className="form-control"
            placeholder="Category Name"
            aria-label="Category Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={hvkCategoryStatus}
            name="hvkCategoryStatus"
            onChange={(ev) => setHvkCategoryStatus(ev.target.value)}
          >
            <option value="" disabled hidden>
              Lựa chọn trạng thái
            </option>
            <option value="true">Hiển thị</option>
            <option value="false">Tạm khóa</option>
          </select>
        </div>
        <button className="btn btn-success" type="submit">Ghi lại</button>
        <button className="btn btn-danger" onClick={hvkHandleClose}>Đóng</button>
      </form>
    </div>
  );
}
