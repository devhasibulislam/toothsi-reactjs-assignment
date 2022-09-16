import React from "react";
import useProduct from "../../utilities/useProduct";

const CheckoutRow = () => {
  const products = useProduct();
  return products.slice(0, 5).map((product) => (
    <tr key={product._id} className="hover">
      <th>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </th>
      <th>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="max-w-full w-12 shadow rounded-md p-1 object-cover"
        />
      </th>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>QTY</td>
      <td>Subtotal</td>
    </tr>
  ));
};
export default CheckoutRow;
