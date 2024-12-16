import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import { ProductsProvider } from "./ProductsContext";
import NoPage from "./pages/NoPage";
import Product from './pages/Product';
import Products from './pages/Products';
import About from './pages/About';
import Checkout from './pages/Checkout';
import NavBar from './components/NavBar';



function App() {
    const [displayError, setDisplayError] = React.useState(false)
    const [values, setValues] = React.useState<any>({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,

        },
        {
            id: 2,
            name: "Email",
            type: "Email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,

        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",

        },
        {
            id: 4,
            name: "password",
            type: "text",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "text",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true
        }]


    const handleOnchange = (e: any) => {
        const { value, name } = e.target;

        setValues({
            ...values,
            [name]: value,
        })
    }
  
    const handleOnBlur = (e: any) => {
        const { value } = e.target;
        const getPattern = e.target.pattern; // This is a string
        const regex = new RegExp(getPattern).test(value); // Convert the string to a RegExp object
        console.log("regex is: ", regex)
        if (!regex) {
            setDisplayError(true)
        } else {
            setDisplayError(false)
        }
    }
    console.log("what does blur return:   ", !handleOnBlur)
    return (
        <ProductsProvider>
            {inputs.map((inp: any, idx: number) =>
                <div key={idx}>
                    <label>{inp.label}
                        <input
                            id={inp.id}
                            name={inp.name}
                            type={inp.type}
                            placeholder={inp.placeholder}
                            required={inp.required}
                            pattern={inp.pattern}
                            onChange={(e) => handleOnchange(e)}
                            onBlur={(e) => handleOnBlur(e)}

                        />
                    </label>
                    {displayError && <p> {inp.errorMessage}</p>}
                </div>
            )}

            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products/:id" element={<Product />} />
                {/*<Route path="products" element={<Products products={products} addItemToCheckoutList={addItemToCheckoutList} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} handleSelectedCategory={handleSelectedCategory} />} />*/}

                <Route path="about" element={<About />} />
                <Route path="checkout" element={<Checkout />} />
                <Route element={<NoPage />} />
            </Routes>

        </ProductsProvider>
    );
}

export default App;
