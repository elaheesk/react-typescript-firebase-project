import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import CheckoutList from "./CheckoutList";

const ProductCard = ({product }:any) => {
    const { checkoutItems, addItemToCheckoutList } = useContext(ProductsContext);


    return (
        <>
            <li style={{ border: "1px solid gray", padding: "1em", margin: "1em" }} >
           
            <strong>Category: </strong>
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                <p><strong>Rating: </strong> {product.rating}</p>
              
            <p> {product.title}</p>
            <p>Price: {product.price} $</p>
                <>
            <h3>Product Reviews</h3>
                {product.reviews?.map((review: any) =>
                    <div style={{ border: "1px solid gray", padding: "8px", margin: "8px" }} key={review.reviewId}>
                        <p>Rating: {review.rating}</p>
                        <p>Comment: {review.comment}</p>
                        <p>Written by: {review.reviewerName} {review.date.substring(0, 10)}</p>

                    </div>
                )}
            </>
           {/* <button style={{ margin: "8px", padding: "4px" }} onClick={() => handleEditComment(product.id)}>Edit comment</button>*/}
     
                <button style={{ margin: "8px", padding: "4px" }} onClick={() => addItemToCheckoutList(product) 

                }>Add to list</button>
            </li>
          
        </>
    )
}
export default ProductCard;