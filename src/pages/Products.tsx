import { useContext, useState } from "react";
import TableHead from "../components/TableHead";
import TableRowProduct from "../components/TableRowProduct";
import { IProduct } from "../types";
import { ProductsContext } from "../ProductsContext";
import FilterNavbar from "../components/FilterNavbar";
import Dropdown from "../components/Dropdown";

const Products = () => {
    const { selectedProducts } = useContext(ProductsContext);
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className="flex flex-col mt-6 justify-self-center w-[48rem] mb-4 ">
            <section className="flex justify-between mt-4">
                <FilterNavbar />
                <div className="pl-4 mt-3">Total products: {selectedProducts.length}</div>
                <div className="flex flex-col pl-3 mt-4 relative">
                    <button onClick={() => setOpenDropdown(!openDropdown)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-1 border border-gray-400 rounded shadow">Sort by</button>
                    {openDropdown ? <Dropdown /> : null}
                </div>
            </section>
            <div className=" overflow-x-auto max-w-[47rem] self-center  shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <TableHead />
                    <tbody>
                        {selectedProducts.map((product: IProduct) =>
                            <TableRowProduct key={product.id} product={product} />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Products;
