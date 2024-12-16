import { FC, useState, useEffect, useContext } from "react";
import FormData from "../components/FormData";
import ListItems from "../components/ListItems";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../ProductsContext";
import CheckoutList from "../components/CheckoutList";


const categoryOptions = ["beauty", "fragrances", "furniture", "groceries"];
const Home = () => {

   
    const [selectedRatings, setSelectedRatings] = useState<any>([]);
    const [selectedRating, setSelectedRating] = useState<string>("All Ratings");
    const { handleSelectedCategory, selectedProducts, checkoutItems } = useContext(ProductsContext);
   


    return (
        <>
            <section>
                <h1>welcome to home page</h1>
         
            </section>

            <CheckoutList
                checkoutItems={checkoutItems}
            />
            <select title="Select ratings" value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
                <option value="">All ratings</option>
                <option value="2">2 or higher</option>
                <option value="3">3 or higher</option>
                <option value="4">4 or higher</option>
            </select>


            {categoryOptions.map((tes: any, i: number) =>
                <div key={i}>
                    <label>{tes}</label>
                    <input type="checkbox" value={tes} onChange={handleSelectedCategory} />
                </div>

            )}
            <section style={{ marginLeft: "50px", marginTop: "30px" }}>
                <span style={{ fontWeight: "bold" }}>Products: </span>
                <span>{selectedProducts.length}</span>
            </section>

            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {selectedProducts.map((product: any) =>
                    <ProductCard
                        key={product.id}
                        product={product }
                    />
                )}
            
            </ul>
         

        </>
    )
}
export default Home;
























