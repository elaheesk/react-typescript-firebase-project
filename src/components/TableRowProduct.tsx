import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { useNavigate } from "react-router-dom";

const TableRowProduct = ({ product }: any) => {
    const { addToCheckout } = useContext(ProductsContext);
    const navigate = useNavigate();
    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white hover:text-blue-600 hover:underline" onClick={() => navigate(`/products/${product.id}`)}>{product.title}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white hover:text-blue-600"> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${product.price}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.rating}</td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                <button onClick={() => addToCheckout(product)} className="text-white bg-blue-500 rounded border py-1 px-2 dark:text-blue-500 hover:underline">Add to card</button>
            </td>
        </tr>
    )
}
export default TableRowProduct;