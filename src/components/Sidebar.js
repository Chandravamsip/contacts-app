import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col h-screen w-64 bg-blue-500 text-white shadow-md">
      <div className="flex items-center justify-center py-4">
        <span className="text-2xl font-bold">Sidebar</span>
      </div>
      <ul className="flex flex-col pl-4">
        <li className="py-2">
          <a href="/" className="hover:text-gray-200">Contact</a>
        </li>
        <li className="py-2">
          <a href="/charts-and-maps" className="hover:text-gray-200">Charts and Maps</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
