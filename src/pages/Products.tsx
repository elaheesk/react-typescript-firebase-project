import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";





/*const categoryOptions = ["beauty", "fragrances", "furniture", "groceries"];*/
//todos: loading, error couldnt get data right now, change all names

const Products = ({ addItemToCheckoutList, selectedProducts, setSelectedProducts, handleSelectedCategory,products }:any) => {
   
   

    







    const [saveId, setSaveId] = useState("");



   

    const handleEditComment = (id: string) => {


    }




   


   




    //useEffect(() => {

    //    if (selectedRating === "All Ratings") {
    //        return;
    //    } else {
    //        const filterSelectedRatings = selectedProducts.filter((prod: any) =>
    //            prod.rating === selectedRating || prod.rating > selectedRating);
    //        setSelectedRatings([...filterSelectedRatings])
    //    }
    //}, [selectedRating])







    return (
        <></>
        //<>
         
        //    <select title="Select ratings" value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
        //        <option value="">All ratings</option>
        //        <option value="2">2 or higher</option>
        //        <option value="3">3 or higher</option>
        //        <option value="4">4 or higher</option>
        //    </select>


        //    {categoryOptions.map((tes: any, i: number) =>
        //        <div key={i}>
        //            <label>{tes}</label>
        //            <input type="checkbox" value={tes} onChange={handleSelectedCategory} />
        //        </div>

        //    )}
        //    <section style={{ marginLeft: "50px", marginTop: "30px" }}>
        //        <span style={{ fontWeight: "bold" }}>Products: </span>
        //        <span>{selectedProducts.length}</span>
        //    </section>
      
        //    <ul style={{ display: "flex", flexWrap: "wrap" }}>
        //        {selectedProducts.map((product: any) =>
        //            <ProductCard
        //                key={product.id}
        //                product={product}
        //                products={products}
                  
        //                handleEditComment={handleEditComment}
        //                addItemToCheckoutList={addItemToCheckoutList }
        //                />
        //        )}
        //    </ul>
        //</>
    )
}
export default Products;
