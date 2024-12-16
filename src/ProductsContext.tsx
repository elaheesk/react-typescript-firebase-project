import React, { createContext,  ReactNode } from "react";

const ProductsContext = createContext<any>(null);
type ProductsProviderProps = {
	children: ReactNode; // Allow children to be any valid React node
};
const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {

	const [products, setProducts] = React.useState<any[]>([]);
	const [checkoutItems, setCheckoutItems] = React.useState<any>([]);
	const [selectedProducts, setSelectedProducts] = React.useState<any>([]);
	const [selectedCategories, setSelectedCategories] = React.useState<any>([]);

	const addItemToCheckoutList = (productToAdd: any) => {
		if (checkoutItems.length === 0) {
			setCheckoutItems([{ ...productToAdd, count: 1 }]);
			return;
		}

		let itemFound = false;
		const updatedItems = checkoutItems.map((item: any) => {
			if (item.id === productToAdd.id) {
				itemFound = true;
				return { ...item, count: item.count + 1 };
			}
			return item;
		});

		if (itemFound) {
			setCheckoutItems(updatedItems); // Update with modified list
		} else {
			setCheckoutItems([...checkoutItems, { ...productToAdd, count: 1 }]); // Add new product
		}
	};
	React.useEffect(() => {

		if (selectedCategories.length) {
			const cat = products.filter((eachObj: any) => {
				return selectedCategories.includes(eachObj.category)
			});
			setSelectedProducts(cat);
		} else {
			setSelectedProducts(products);
		}

	}, [selectedCategories])


	const handleSelectedCategory = (e: any) => {
		const val = e.target.value;

		const foundCategory = selectedCategories.find((cate: string) => cate === val);
		if (foundCategory) {
			const newCatArr = selectedCategories.filter((selected: string) => selected !== foundCategory)
			setSelectedCategories(newCatArr)
		}
		else {

			setSelectedCategories((prev: any) => [...prev, val]);
		}

	}
	React.useEffect(() => {

		const fetchData = async () => {
			try {
				const response = await fetch("https://dummyjson.com/products");

				if (!response.ok) {
					throw new Error("Failed response");
				}
				const data = await response.json();
				const editedProducts = data.products.map((product: any) => {

					return {
						...product, reviews: product.reviews.map((review: any, index: number) => {
							return { ...review, reviewId: `${product.id}-${index}` }
						})

					}
				})

				setSelectedProducts(editedProducts)
				setProducts(editedProducts);

			} catch (error) {
				throw new Error("Failed to fetch data");
			}
		};
		fetchData();

	}, [])
	return (
		<ProductsContext.Provider value={{ checkoutItems, addItemToCheckoutList, handleSelectedCategory, selectedProducts ,products}}>
			{children}
		</ProductsContext.Provider>)
}

export { ProductsContext, ProductsProvider };