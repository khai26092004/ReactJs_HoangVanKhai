import React, { useState } from 'react';

const HvkProductAdd = ({ addProduct }) => {
    const [hvk_productId, setProductId] = useState('');
    const [hvk_productName, setProductName] = useState('');
    const [hvk_quantity, setQuantity] = useState('');
    const [hvk_price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            hvk_productId,
            hvk_productName,
            hvk_quantity: parseInt(hvk_quantity),
            hvk_price: parseInt(hvk_price)
        };
        addProduct(newProduct);
        setProductId('');
        setProductName('');
        setQuantity('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product ID"
                value={hvk_productId}
                onChange={(e) => setProductId(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Product Name"
                value={hvk_productName}
                onChange={(e) => setProductName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={hvk_quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={hvk_price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default HvkProductAdd;
