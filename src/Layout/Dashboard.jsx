import { FaAd, FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="menu p-4 w-64 min-h-screen bg-orange-400">
                <Link to='/' className="text-center mb-10">
                    <h2 className="text-3xl text-white uppercase font-serif">Bistro-Boss</h2>
                    <h2 className="text-xl text-white uppercase font-serif">Restaurent</h2>
                </Link>

                <li className="mb-1"><NavLink className='bg-slate-700 text-white' to='/dashboard/userHome'> <FaHome></FaHome>User Home</NavLink></li>
                <li className="mb-1"><NavLink className='bg-slate-700 text-white' to='/dashboard/reservition'> <FaCalendar></FaCalendar>Reservition</NavLink></li>
                <li className="mb-1"><NavLink className='bg-slate-700 text-white' to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>Cart</NavLink></li>
                <li className="mb-1"><NavLink className='bg-slate-700 text-white' to='/dashboard/review'> <FaAd></FaAd>Add a Review</NavLink></li>
                <li><NavLink className='bg-slate-700 text-white' to='/dashboard/booking'> <FaList></FaList>My Booking</NavLink></li>

                <div className="divider bg-white mt-6 mb-6 h-[1px]"></div>

                <li className="mb-1"><NavLink className='bg-slate-700 text-white' to='/'> <FaHome></FaHome>Home</NavLink></li>
                <li className="mb-1"><NavLink className='bg-slate-700 text-white' to='/menu'> <FaList></FaList>Menu</NavLink></li>
                <li className="mb-1"><NavLink className='bg-slate-700 text-white' to='/order/salad'> <FaShoppingBag></FaShoppingBag>Shop</NavLink></li>
                <li><NavLink className='bg-slate-700 text-white' to='/menu'> <FaPhone>  </FaPhone>Contact</NavLink></li>

            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;