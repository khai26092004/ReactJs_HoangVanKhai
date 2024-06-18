import React, { useState } from 'react';
import './App.css';
import HvkListProducts from './components/HvkListProducts'; // Đường dẫn này cần chính xác
import HvkProductAdd from './components/HvkProductAdd'; // Đảm bảo cũng kiểm tra đường dẫn này

const hvk_Products = [
    {
        hvk_productId: "2210900109",
        hvk_productName: "Phạm Thành Đạt",
        hvk_quantity: 15,
        hvk_price: 1000
    },
    {
        hvk_productId: "P002",
        hvk_productName: "IPhone 12",
        hvk_quantity: 20,
        hvk_price: 1250
    },
    {
        hvk_productId: "P003",
        hvk_productName: "IPhone 13",
        hvk_quantity: 10,
        hvk_price: 1500
    },
];

function App() {
    const [products, setProducts] = useState(hvk_Products);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    return (
        <div className="App">
            <HvkListProducts products={products} />
            <HvkProductAdd addProduct={addProduct} />
        </div>
    );
}

export default App;
