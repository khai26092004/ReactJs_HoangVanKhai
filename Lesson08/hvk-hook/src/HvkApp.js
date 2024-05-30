import logo from './logo.svg';
import './App.css';
import HvkListProduct from './components/HvkListProduct';
import HvkProductAddOrEdit from './components/HvkProductAddOrEdit';
import { useState } from 'react';

function HvkApp() {
  const hvkProducts = [
    {
      hvkproductid: "2210900109",
      hvkproductName: "Hoàng Văn Khải",
      hvkquantity: 2,
      hvkprice: 2
    },
    {
      hvkproductid: "P002",
      hvkproductName: "IPhone 12",
      hvkquantity: 20,
      hvkprice: 1250
    },
    {
      hvkproductid: "P003",
      hvkproductName: "IPhone 13",
      hvkquantity: 10,
      hvkprice: 1500
    }
  ];

  const [hvkListProducts, sethvkListProducts] = useState(hvkProducts);

  const hvkHandleSubmit = (hvkProduct) => {
    console.log("Add", hvkProduct);
    sethvkListProducts((hvkPrev) => {
      return [
        ...hvkPrev,
        hvkProduct
      ];
    });
  };

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>Xử lý chức năng CRUD - HOOK</h1>
      <hr/>
      <HvkListProduct renderhvkProductss={hvkListProducts} />
      <HvkProductAddOrEdit hvkOnSubmit={hvkHandleSubmit}/>
    </div>
  );
}

export default HvkApp;
