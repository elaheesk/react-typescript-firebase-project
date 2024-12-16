import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <header className="navbar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/" reloadDocument>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" reloadDocument>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/checkout" reloadDocument>
                                Checkout
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" reloadDocument>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default NavBar;