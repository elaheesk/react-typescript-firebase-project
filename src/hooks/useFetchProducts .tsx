import { useEffect } from "react";

export const useFetchProducts = (setProducts: Function, setSelectedProducts: Function) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");

                if (!response.ok) {
                    throw new Error("Failed response");
                }

                const data = await response.json();

                const simplifiedProducts = data.products.map((product: any) => ({
                    id: product.id,
                    title: product.title,
                    category: product.category,
                    brand: product.brand,
                    price: product.price,
                    description: product.description,
                    thumbnail: product.thumbnail,
                    stock: product.stock,
                    rating: product.rating,
                    reviews: product.reviews.map((review: any, index: number) => ({
                        ...review,
                        reviewId: `${product.id}-${index}`,
                    })),
                    count: 0,
                }));

                setSelectedProducts(simplifiedProducts);
                setProducts(simplifiedProducts);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [setProducts, setSelectedProducts]);
};
