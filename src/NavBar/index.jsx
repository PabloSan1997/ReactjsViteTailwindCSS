import { NavLink } from "react-router-dom";



export function Navbar() {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                <li>
                    <NavLink to="/">All</NavLink>
                </li>
                <li>
                    <NavLink to="/clothes">Clothes</NavLink>
                </li>
                <li>
                    <NavLink to="/electronics">Electronic</NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures">Fornitures</NavLink>
                </li>
                <li>
                    <NavLink to="/toys">Toys</NavLink>
                </li>
                <li>
                    <NavLink to="/others">Others</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    hola@hotmail.com
                </li>
                <li>
                    <NavLink to="/my-orders">My orders</NavLink>
                </li>
                <li>
                    <NavLink to="/my-account">My Account</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">Sign in</NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}
