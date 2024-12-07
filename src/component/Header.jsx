import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-b border-b-slate-500 bg-slate-800 text-white">
      <div className="py-2 w-11/12 mx-auto navbar">
        <div className="navbar-start my-0">
          {/* Mobile Dropdown Menu */}
          <div className="dropdown block md:hidden">
            <div tabIndex={0} role="button" className="btn py-0 btn-sm btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" activeClassName="text-sky-400">
                  <FaHouseChimney /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="text-sky-400">
                  <FaUser /> About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="text-sky-400">
                  <IoIosMail /> Contact Me
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Brand Name */}
          <a className="btn btn-ghost text-xl russo-one-regular">
            <span className="text-green-600">@Mehedi</span> Hasan
          </a>
        </div>

        {/* Desktop Navigation */}
        
        <div className="navbar-end flex justify-end">
          <div className="hidden md:block">
          <ul className="menu menu-horizontal  ">
            <li>
              <NavLink to="/" activeClassName="text-sky-400">
                <FaHouseChimney /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="text-sky-400">
                <FaUser /> About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="text-sky-400">
                <IoIosMail /> Contact Me
              </NavLink>
            </li>
          </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
}
