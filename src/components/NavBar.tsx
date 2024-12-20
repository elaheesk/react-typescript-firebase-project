import { Link } from "react-router-dom";
import { routes } from "../data";

const NavBar = () => {
    return (
        <header className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/" reloadDocument>
                            Home
                        </Link>
                    </li>
                    {routes.map((route, idx) =>
                        <li key={idx}>
                            <Link key={idx} to={route.route} reloadDocument>
                                {route.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;