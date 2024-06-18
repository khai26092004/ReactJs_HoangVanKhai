import { useEffect, useState } from "react";
import "./App.css";
import HvkCategoryList from "./components/HvkCategoryList";
import axios from "./api/HvkApi";
import HvkCategoryForm from "./components/HvkCategoryForm";

function HvkApp() {
  // Lấy dữ liệu từ API     
  const [hvkCategories, setHvkCategories] = useState([]);

  const getCategories = async () => {
    try{ 
        const hvkCateResponse = await axios.get("/HvkCategory");
      setHvkCategories(hvkCateResponse.data);}
     catch (error) {
      console.error("Error fetching data:", error);
    } 
 
  }
  useEffect(() => {
    getCategories();
  
  }, [])
  console.log(hvkCategories)
  // Trạng thái form
  const [hvkCategoryIsForm, setHvkCategoryIsForm] = useState(false);

  const hvkHandleAddNew = (param)=> {
    setHvkCategoryIsForm(param);
  }
  const hvkHandleCloseForm = (param) => {
    setHvkCategoryIsForm(param);
  }
  const hvkHandleCategorySubmit = (param) => {
    hvkCategories.push(param);
    setHvkCategories((prev) => {
      return [...prev];
    })
    setHvkCategoryIsForm(false);
  }
  return (
    <div className="container border my-3">
      <h1>Hoàng Văn Khải - Call API</h1>

      <HvkCategoryList renderHvkCategories = {hvkCategories}
        onAddNew = {hvkHandleAddNew}
      />
      <hr />
      {
        hvkCategoryIsForm === true? <HvkCategoryForm onCloseForm = {hvkHandleCloseForm}
          onHvkCategorySubmit = {hvkHandleCategorySubmit}
        />:""
      }
    </div>
  );
}

export default HvkApp;
