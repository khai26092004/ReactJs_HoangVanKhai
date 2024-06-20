import { useEffect, useState } from "react";
import "./App.css";
import HvkCategoryList from "./components/HvkCategoryList";
import axios from "./api/HvkApi";
import HvkCategoryForm from "./components/HvkCategoryForm";

function HvkApp() {
  // Lấy dữ liệu từ API     
  const [hvkCategories, setHvkCategories] = useState([]);

  const getCategories = async () => {
    try {
      const hvkCateResponse = await axios.get("/HvkCategory");
      setHvkCategories(hvkCateResponse.data);
    }
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
  // Dữ liệu form : add/edit
  const [hvkCategoryEdit, setHvkCategoryEdit] = useState("");

  const hvkHandleAddNew = (param) => {
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
  // hàm xủ lý xóa 1 đối tượng category
  const hvkHandleDelete = (hvkId) => {
    console.log("App-Delete-hvkId", hvkId);
    // xóa api
    // const hvkResponse =  axios.delete(`https://667048740900b5f8724a11e5.mockapi.io/hvkAPi/hvkv1/HvkCategory/${hvkId}`);
    const hvkResponse = axios.delete(`HvkCategory/${hvkId}`);
    console.log("hvkResponse-Delete", hvkResponse);
    let hvkDelete = hvkCategories.filter(x => x.hvkId !== hvkId);
    setHvkCategories(hvkCategories);
    console.log("Delete:", hvkDelete);
  }
  // sửa category
  const hvkhandleEdit = (hvkCategory) => {
    setHvkCategoryEdit(hvkCategory)
    setHvkCategoryIsForm(true);
  }
  return (
    <div className="container border my-3">
      <h1>Hoàng Văn Khải - Call API</h1>

      <HvkCategoryList renderHvkCategories={hvkCategories}
        onAddNew={hvkHandleAddNew}
        onHvkDelete={hvkHandleDelete}
        onHvkEdit={hvkhandleEdit}
      />
      <hr />
      {
        hvkCategoryIsForm === true ? <HvkCategoryForm onCloseForm={hvkHandleCloseForm}
          onHvkCategorySubmit={hvkHandleCategorySubmit}
          renderHvkCategory={hvkCategoryEdit}
        /> : ""
      }
    </div>
  );
}

export default HvkApp;
