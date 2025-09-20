import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="menu p-4 w-64 min-h-screen bg-orange-400">
                <li><NavLink> <FaShoppingCart></FaShoppingCart>Cart</NavLink></li>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;