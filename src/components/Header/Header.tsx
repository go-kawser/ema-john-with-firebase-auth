import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import { AuthContextType } from "../../..";

const Header: React.FC = () => {
  const { user, logOut } = useContext(AuthContext) as AuthContextType;

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error: Error) => console.error(error));
  };

  return (
    <nav className="h-20 bg-gray-900 flex justify-between items-center px-24">
      <div>
        <Link to="/" className="text-white ml-7 hover:text-amber-400">
          Shop
        </Link>
        <Link to="/orders" className="text-white ml-7 hover:text-amber-400">
          Orders
        </Link>
        <Link to="/inventory" className="text-white ml-7 hover:text-amber-400">
          Inventory
        </Link>
        <Link to="/login" className="text-white ml-7 hover:text-amber-400">
          Login
        </Link>
        <Link to="/sign-up" className="text-white ml-7 hover:text-amber-400">
          Sign up
        </Link>
        {user && (
          <span className="text-white ml-7">
            {user.email}
            <button
              onClick={handleLogOut}
              className="ml-2 bg-amber-500 px-2 py-1 rounded"
            >
              Sign Out
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
