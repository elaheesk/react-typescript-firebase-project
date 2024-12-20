import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IProduct } from "./types";
import { collection, doc, DocumentSnapshot, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useFetchProducts } from "./hooks/useFetchProducts ";

const ProductsContext = createContext<any>(null);
type ProductsProviderProps = {
    children: ReactNode;
};
const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
    const [products, setProducts] = React.useState<any[]>([]);
    const [checkoutList, setCheckoutList] = useState<IProduct[]>([]);
    const [selectedProducts, setSelectedProducts] = React.useState<IProduct[]>([]);
    const [selectedCategories, setSelectedCategories] = React.useState<any>([]);
    const CHECKOUT_DOC_ID = "sharedCheckoutList";
    useFetchProducts(setProducts, setSelectedProducts);

    const incrementAmount = (id: number) => {
        setCheckoutList((prevList) => {
            const updatedList = prevList.map((p) =>
                p.id === id ? { ...p, count: p.count + 1 } : p
            );
            saveToFirestore(updatedList);
            return updatedList;
        });
    };

    const decrementAmount = (id: number) => {
        setCheckoutList((prevList) => {
            const updatedList = prevList
                .map((p) =>
                    p.id === id ? { ...p, count: Math.max(p.count - 1, 1) } : p
                )
                .filter((p) => p.count > 0);
            saveToFirestore(updatedList);
            return updatedList;
        });
    };
    const saveToFirestore = async (updatedList: IProduct[]) => {
        try {
            const docRef = doc(collection(db, "checkout"), CHECKOUT_DOC_ID);
            await setDoc(docRef, { items: updatedList });
        } catch (error) {
        }
    };

    const addToCheckout = async (product: IProduct) => {
        setCheckoutList((prevList) => {
            const existingProduct = prevList.find((p) => p.id === product.id);

            const updatedList = existingProduct
                ? prevList.map((p) =>
                    p.id === product.id ? { ...p, count: p.count + 1 } : p
                )
                : [...prevList, { ...product, count: 1 }];
            saveToFirestore(updatedList);
            return updatedList;
        });
    };
    const removeProductFromList = (id: number) => {
        setCheckoutList((prevList) => {
            const updatedList = prevList.filter((p) => p.id !== id);
            saveToFirestore(updatedList);
            return updatedList;
        });
    };

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
        if (selectedCategories.length) {
            const cat = products.filter((eachObj: any) => {
                return selectedCategories.includes(eachObj.category)
            });
            setSelectedProducts(cat);
        } else {
            setSelectedProducts(products);
        }
    }, [selectedCategories])


    useEffect(() => {
        const fetchFromFirestore = async () => {
            try {
                const docRef = doc(collection(db, "checkout"), CHECKOUT_DOC_ID);
                const docSnap: DocumentSnapshot = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setCheckoutList(data.items || []);
                } else {
                    setCheckoutList([]);
                }
            } catch (error) {
            }
        };
        fetchFromFirestore();
    }, []);

    return (
        <ProductsContext.Provider value={{ checkoutList, addToCheckout, handleSelectedCategory, selectedProducts, setSelectedProducts, incrementAmount, decrementAmount, products, removeProductFromList }}>
            {children}
        </ProductsContext.Provider>)
}
export { ProductsContext, ProductsProvider };