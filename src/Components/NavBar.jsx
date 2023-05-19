import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { MiContexto } from "../Context";



export function Navbar() {
    const activeStyle = "underline underline-offset-4";
    const {count} = MiContexto();
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold ">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : undefined}>All</NavLink>
                </li>
                <li>
                    <NavLink to="/clothesmen" className={({ isActive }) => isActive ? activeStyle : undefined}>{"Men's clothes"}</NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={({ isActive }) => isActive ? activeStyle : undefined}>Electronic</NavLink>
                </li>
                <li>
                    <NavLink to="/jewelery" className={({ isActive }) => isActive ? activeStyle : undefined}>Jewelery</NavLink>
                </li>
                <li>
                    <NavLink to="/clothewomen" className={({ isActive }) => isActive ? activeStyle : undefined}>{"Women's clothing"}</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    hola@hotmail.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle : undefined}>My orders</NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle : undefined}>My Account</NavLink>
                </li>
                <li>
                    <NavLink to="/signin" className={({ isActive }) => isActive ? activeStyle : undefined}>Sign in</NavLink>
                </li>
                <li className='flex'>
                    <ShoppingCartIcon className='w-6 h-6 mr-1 text-stone-500'/> <span>{count}</span>
                </li>
            </ul>
        </nav>
    )
}
