import React from "react";
import { Link } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-24 flex flex-col p-4 border border-gray-300 rounded-3xl shadow-md mx-4 bg-white  mt-3 mb-2">
      <div className="text-center my-6">
        <Link to="/">
          <div className="w-16 h-16 flex items-center justify-center text-xs">
            <FaAirbnb className="text-5xl text-gray-500" />
          </div>
        </Link>
      </div>

      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:bg-gray-100 rounded-2xl">
          <div className="border border-gray-200 rounded-2xl w-16 h-16 flex items-center justify-center text-xs">
            Databot
          </div>
        </Link>
        <Link to="/dvisual" className="hover:bg-gray-100 rounded-2xl">
          <div className="border border-gray-200 rounded-2xl w-16 h-16 flex items-center justify-center text-xs">
            D-Visual
          </div>
        </Link>
      </nav>
      <div className="border-t border-gray-200 mt-auto"></div>
      <div className="border border-gray-200 rounded-2xl w-16 h-16 flex items-center justify-center text-5xl mt-2 bg-blue-400">
        S
      </div>
    </div>
  );
};

export default Sidebar;
