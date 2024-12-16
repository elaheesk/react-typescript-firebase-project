import { useParams } from "react-router-dom";
import { RouteParams } from "../types";
import { useEffect } from "react";

const Product = () => {
    const { id } = useParams<RouteParams>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [id]);


    return (
        <>
            single product
        </>
    )
}
export default Product;