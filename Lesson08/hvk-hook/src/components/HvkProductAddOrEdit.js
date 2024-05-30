import React, { useState } from 'react';

export default function HvkProductAddOrEdit({ hvkOnSubmit }) {
    const [hvkproductid, sethvkproductid] = useState('');
    const [hvkproductName, sethvkproductName] = useState('');
    const [hvkquantity, sethvkquantity] = useState(0);
    const [hvkprice, sethvkprice] = useState(0);

    const hvkHandleSubmit = (hvkEvent) => {
        hvkEvent.preventDefault();
        let hvkProduct = {
            hvkproductid: hvkproductid,
            hvkproductName: hvkproductName,
            hvkquantity: hvkquantity,
            hvkprice: hvkprice,
        };
        hvkOnSubmit(hvkProduct);
    };

    return (
        <div className='col-md-6'>
            <h2>Thêm mới sản phẩm / Sửa đổi</h2>
            <hr />
            <form onSubmit={hvkHandleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Mã sản phẩm"
                        name='hvkproductid'
                        value={hvkproductid}
                        onChange={(ev) => sethvkproductid(ev.target.value)}
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tên sản phẩm"
                        name='hvkproductName'
                        value={hvkproductName}
                        onChange={(ev) => sethvkproductName(ev.target.value)}
                        aria-describedby="basic-addon2"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Số lượng sản phẩm</span>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Số lượng sản phẩm"
                        name='hvkquantity'
                        value={hvkquantity}
                        onChange={(ev) => sethvkquantity(ev.target.value)}
                        aria-describedby="basic-addon3"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon4">Đơn giá</span>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Đơn giá"
                        name='hvkprice'
                        value={hvkprice}
                        onChange={(ev) => sethvkprice(ev.target.value)}
                        aria-describedby="basic-addon4"
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Thêm mới</button>
            </form>
        </div>
    );
}
