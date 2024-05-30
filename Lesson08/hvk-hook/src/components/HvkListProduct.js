import React from 'react';

export default function HvkListProduct({ renderhvkProductss }) {
    console.log("List product: ", renderhvkProductss);
    let hvktong = 0;
    let hvkElemetProduct = renderhvkProductss.map((hvkProduct, index) => {
        hvktong += hvkProduct.hvkquantity * hvkProduct.hvkprice;
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{hvkProduct.hvkproductid}</td>
                <td>{hvkProduct.hvkproductName}</td>
                <td>{hvkProduct.hvkquantity}</td>
                <td>{hvkProduct.hvkprice}</td>
                <td>{hvkProduct.hvkquantity * hvkProduct.hvkprice}</td>
                <td>
                    <button className='btn btn-success mx-1'>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='btn btn-danger mx-1'>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    });

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {hvkElemetProduct}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={5} className='text-end'>Tổng cộng: </th>
                        <th className='text-start' colSpan={2}>{hvktong}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
