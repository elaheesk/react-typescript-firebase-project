import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="layout-container">
            <NavBar />
            <main className="layout-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default Layout;