import Sidebar from "../components/Sidebar"

export default function MasterLayout ({ children }) {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="row">
                {children}
            </div>
        </div>
    )
};