import React from 'react'

export default function HvkStudentList({ renderHvkStudentList }) {
    console.log("Data", renderHvkStudentList);
    let hvkElement = renderHvkStudentList.map((hvkStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{hvkStudent.hvkId}</td>
                <td>{hvkStudent.hvkName}</td>
                <td>{hvkStudent.hvkAge}</td>
                <td>{hvkStudent.hvkPhone}</td>
                <td>{hvkStudent.hvkEmail}</td>
                <td>{hvkStudent.hvkCreatedAt}</td>
                <td>{hvkStudent.hvkStatus}</td>
                <td>

                </td>
            </tr>
        )
    });


    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ Tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {hvkElement}
                </tbody>
            </table>

        </div>
    )
}
