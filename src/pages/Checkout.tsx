import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { IProduct } from "../types";

const Checkout: React.FC = () => {
    const { checkoutList, incrementAmount, decrementAmount, removeProductFromList } = useContext(ProductsContext);
    const totalPrice = checkoutList.reduce((sum: any, product: any) => {
        return sum += (product.price * product.count);
    }, 0)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
            </div>
            <div className="mt-8">
                {checkoutList.map((item: IProduct) =>
                    <div key={item.id} className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                        <div className="flex-shrink-0">
                            <img src={item.thumbnail} alt="Product" className="w-32 h-32 object-cover"></img>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="mt-2 text-gray-600">{item.description}n</p>
                            <div className="mt-4 flex items-center">
                                <span className="mr-2 text-gray-600">Quantity:</span>
                                <div className="flex items-center">
                                    <button onClick={() => decrementAmount(item.id)} className="bg-black text-white rounded-l-lg px-2 py-1">-</button>
                                    <span className="mx-2 text-gray-600">{item.count}</span>
                                    <button onClick={() => incrementAmount(item.id)} className="bg-black text-white bg-gray-200 rounded-r-lg px-2 py-1">+</button>
                                </div>
                                <span className="ml-auto font-bold">
                                    {item.count > 1
                                        ? `${item.count}x$${item.price} = $${item.count * item.price}`
                                        : `$${item.price}`}
                                </span>
                            </div>
                            <button onClick={() => removeProductFromList(item.id)} className="bg-red-500 text-white bg-gray-200 rounded px-2 py-1">Delete</button>
                        </div>
                    </div>
                )}
            </div>
            {totalPrice > 0 ? <div className="flex justify-end items-center mt-8">
                <span className="text-gray-600 mr-4">Subtotal:</span>
                <span className="text-xl font-bold">${totalPrice}</span>
            </div> : ""}
        </div>
    )
}
export default Checkout;