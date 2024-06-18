import React from "react";

export default function HvkCategoryList({ renderHvkCategories, onAddNew }) {
  // console.log("DataCate: ", renderHvkCategories);
  let hvkCategoryElement = renderHvkCategories.map((hvkCategory, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{hvkCategory.hvkId}</td>
        <td>{hvkCategory.hvkCategoryName}</td>
        <td>
          {hvkCategory.hvkCategoryStatus === true ? "Hiển thị" : "Tạm khóa"}
        </td>
        <td>Edit | Del</td>
      </tr>
    );
  })
  const hvkHandleAdd = ()=> {
    onAddNew(true);
  }
  return (
    <div className="container m-2">
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã loại</th>
            <th>Tên loại</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>{hvkCategoryElement}</tbody>
      </table>
      <button className="btn btn-primary" onClick={hvkHandleAdd}>Thêm mới</button>
    </div>
  );
}
