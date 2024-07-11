import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    { path: "/about", label: "About" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <span>Home</span>

            <div className="flex flex-1"></div>

            {
                navItems.map(({ path, label }) => (
                    <ActiveLink key={path} path={path} text={label} /> 
                ))
            }
        </nav>
    )
}
