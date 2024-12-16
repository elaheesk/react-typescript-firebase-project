import { useState, useEffect, useContext } from "react";
import CheckoutList from "../components/CheckoutList";
import { ProductsContext } from "../ProductsContext";

const Checkout: React.FC = () => {
    const { checkoutItems, setCheckoutItems } = useContext(ProductsContext);





    return (
        <div>
                <CheckoutList checkoutItems={checkoutItems} setCheckoutItems={setCheckoutItems} /></div>
    )
}
export default Checkout;