import React from 'react';

const HvkListProducts = ({ products }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.hvk_productId}>
                        <td>{product.hvk_productId}</td>
                        <td>{product.hvk_productName}</td>
                        <td>{product.hvk_quantity}</td>
                        <td>{product.hvk_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HvkListProducts;
