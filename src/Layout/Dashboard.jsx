import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="menu p-4 space-y-2 w-64 min-h-screen bg-orange-400">
                <li><NavLink className='bg-slate-700 text-white' to='/dashboerd/userHome'> <FaHome></FaHome>User Home</NavLink></li>
                <li><NavLink className='bg-slate-700 text-white' to='/dashboerd/reservition'> <FaCalendar></FaCalendar>Reservition</NavLink></li>
                <li><NavLink className='bg-slate-700 text-white' to='/dashboerd/cart'> <FaShoppingCart></FaShoppingCart>Cart</NavLink></li>
                <li><NavLink className='bg-slate-700 text-white' to='/dashboerd/review'> <FaAd></FaAd>Add a Review</NavLink></li>
                <li><NavLink className='bg-slate-700 text-white' to='/dashboerd/booking'> <FaList></FaList>My Booking</NavLink></li>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;