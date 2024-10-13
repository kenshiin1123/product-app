import { Link } from "react-router-dom";
import { IoStorefront } from "react-icons/io5";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { useGlobalStore } from "../store/global";
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {
  const [dropdownIsToggled, setDropdownIsToggled] = useState(true);
  const { darkMode, setDarkMode } = useGlobalStore();

  const updateDropdownToggle = () => {
    setDropdownIsToggled(!dropdownIsToggled);
  };

  return (
    // NavBar
    <div
      className={`sticky top-0 z-10 mb-5 flex w-full bg-white px-5 py-3 shadow-sm transition-all dark:bg-black dark:text-white dark:outline dark:outline-1 dark:outline-[#25292e]`}>
      <button className="mr-auto flex items-center justify-center gap-3 text-2xl">
        <Link to="/" className="line-clamp-1">
          Store Products
        </Link>
        <IoStorefront />
      </button>
      <ul className="flex h-full items-center justify-center gap-5 max-md:hidden [&>li]:select-none [&>li]:rounded [&>li]:px-3 [&>li]:py-1 [&>li]:text-black [&>li]:outline [&>li]:outline-1 [&>li]:outline-[#25292e] [&>li]:transition-colors [&>li]:duration-100 [&>li]:dark:bg-black [&>li]:dark:text-white">
        <li
          className={`hover:bg-black hover:text-white active:bg-slate-600 active:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black`}>
          <Link to="/products/">Products</Link>
        </li>
        <li
          className={`hover:bg-black hover:text-white active:bg-slate-600 active:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black`}>
          <Link to="/products/create">Create new Product</Link>
        </li>
      </ul>
      <button className="ml-5 text-3xl max-md:mr-5" onClick={setDarkMode}>
        {darkMode ? <CiDark /> : <CiLight />}
      </button>
      <button onClick={updateDropdownToggle} className="text-2xl md:hidden">
        {dropdownIsToggled ? <FaBars /> : <FaBarsStaggered />}
      </button>

      {!dropdownIsToggled && (
        <div className="fixed top-16 flex w-56 flex-col gap-2 rounded-md bg-black bg-opacity-50 p-3 font-semibold max-md:right-12 max-sm:left-0 max-sm:right-0 max-sm:mx-auto max-sm:w-[80%] md:hidden dark:text-black [&>a]:truncate [&>a]:rounded-sm [&>a]:border [&>a]:border-black [&>a]:bg-white [&>a]:py-2 [&>a]:text-center">
          <Link onClick={updateDropdownToggle} to="/products/">
            Products
          </Link>
          <Link onClick={updateDropdownToggle} to="/products/create">
            Create new Product
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
