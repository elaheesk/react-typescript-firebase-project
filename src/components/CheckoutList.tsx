import { useEffect } from "react";

const CheckoutList = ({ checkoutItems, setCheckoutItems }: any) => {


    const incrementAmount = (itemToIncrement: any) => {
        if (itemToIncrement.stock === itemToIncrement.count) {
            alert("The number exceeds what is currently in stock")
        } else {
            const editedCount = checkoutItems.map((item: any) => {
                if (itemToIncrement.id === item.id) {
                    return { ...item, count: item.count + 1 }
                } else {
                    return { ...item }
                }
            })
            setCheckoutItems([...editedCount]);
        }
    }

    const decrementAmount = (itemToDecrement: any) => {
        if (itemToDecrement.count === 1) {
            const filteredList = checkoutItems.filter((product: any) => {
                return product.id !== itemToDecrement.id;
            })
            setCheckoutItems([...filteredList]);
        } else {
            const editedCount = checkoutItems.map((item: any) => {
                if (itemToDecrement.id === item.id) {
                    return { ...item, count: item.count - 1 }
                } else {
                    return { ...item }
                }
            })
            setCheckoutItems([...editedCount]);
        }
    }

    const removeProductFromList = (id: number) => {
        const filteredList = checkoutItems.filter((product: any) => {
            return product.id !== id;
        })
        setCheckoutItems([...filteredList]);
    }

    const totalPrice = checkoutItems.reduce((sum: any, product: any) => {
        return sum += (product.price * product.count);
    }, 0)


    return (
        <div>
            <h2>This is supposed to be another page</h2>
            <p>Total price: {totalPrice}</p>
            {checkoutItems.map((item: any) =>

                <li style={{ border: "1px solid gray", padding: "1em", margin: "1em" }} key={item.id} >
                    <strong>Category:</strong>
                    {item.category}
                    <p> {item.title}</p>
                    <p><strong>Price: {item.price * item.count}</strong>$</p>
                    <p>Quantity: {item.count}</p>
                    <button onClick={() => incrementAmount(item)}>+</button>
                    <button onClick={() => decrementAmount(item)}>-</button>
                    <button onClick={() => removeProductFromList(item.id)}>Remove item</button>
                </li>
            )}</div>
    )
}
export default CheckoutList;