import AppNavbar from "../components/AppNavbar"
import Sidebar from "../components/Sidebar"

export default function MasterLayout ({ children, navbarTitle }) {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div style={{ width: "100%" }}>
                <AppNavbar navbarTitle={navbarTitle}></AppNavbar>
                {children}
            </div>
        </div>
    )
};