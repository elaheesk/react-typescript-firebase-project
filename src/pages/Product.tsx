import { useParams,useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { IProduct, IProductReview } from "../types";
import { ProductsContext } from "../ProductsContext";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const { addToCheckout } = useContext(ProductsContext);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={product?.thumbnail} alt="Product"></img>
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={() => navigate("/products")}>Back to products page</button> 
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={() => addToCheckout(product)}>Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product?.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {product?.description}
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span className="text-gray-600 dark:text-gray-300"> ${product?.price}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                <span className="text-gray-600 dark:text-gray-300"> {product?.availabilityStatus}</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Reviews</span>
                            {product?.reviews.map((review: IProductReview, idx: number) =>
                                <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {review.comment} {review.date.slice(0, 10)}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;