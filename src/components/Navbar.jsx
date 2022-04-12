import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-slate-100 flex items-center">
      <nav className="ml-4 py-6">
        <ul className="flex space-x-4 text-blue-700 items-center justify-center">
          <li className="text-xl">Dashboard</li>
          <li className="text-lg">Home</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
