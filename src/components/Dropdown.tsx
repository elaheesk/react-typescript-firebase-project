import React, { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { IProduct } from "../types";
import { sortParameters } from "../data";
const Dropdown = () => {
    const { selectedProducts, setSelectedProducts,  } = useContext(ProductsContext);

    const sortByParameter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const sortedProducts = [...selectedProducts];
        if (val === "priceAsc") {
            sortedProducts.sort((a: IProduct, b: IProduct) => a.price - b.price); 
        } else if (val === "priceDesc") {
            sortedProducts.sort((a: IProduct, b: IProduct) => b.price - a.price); 
        } else if (val === "popular") {
            sortedProducts.sort((a: IProduct, b: IProduct) => b.rating - a.rating);
        } else if (val === "reset") {
            sortedProducts.sort((a: IProduct, b: IProduct) => a.id - b.id); 
        }
        setSelectedProducts(sortedProducts);
    };

    return (
        <ul className="fixed top-[9rem] w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {sortParameters.map((parameter, idx) =>
                <li key={idx} className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input onChange={sortByParameter} type="radio" value={parameter.value} name="sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{parameter.title}</label>
                    </div>
                </li>
            )}
        </ul>
    )
}
export default Dropdown;



