import React from "react";
import { FaHome, FaPlus, FaClock, FaFileAlt, FaFolderOpen, FaCog, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-20 bg-white flex flex-col items-center py-4 shadow-lg">
      {/* Logo */}
      <div className="text-lg font-bold mb-6">IN|HOUSE</div>

      {/* Menu */}
      <nav className="flex-1">
        <ul className="space-y-4 text-gray-600">
          <li className="flex flex-col items-center">
            <FaHome size={20} />
            <span className="text-sm">Home</span>
          </li>
          <li className="flex flex-col items-center">
            <FaPlus size={20} />
            <span className="text-sm">New Chat</span>
          </li>
          <li className="flex flex-col items-center">
            <FaClock size={20} />
            <span className="text-sm">History</span>
          </li>
          <li className="flex flex-col items-center">
            <FaFileAlt size={20} />
            <span className="text-sm">Documents</span>
          </li>
          <li className="flex flex-col items-center">
            <FaFolderOpen size={20} />
            <span className="text-sm">Templates</span>
          </li>
          <li className="flex flex-col items-center">
            <FaCog size={20} />
            <span className="text-sm">Settings</span>
          </li>
        </ul>
      </nav>

      {/* Profile */}
      <div className="flex flex-col items-center mt-4">
        <FaUser size={20} />
        <span className="text-sm mt-1">Profile</span>
      </div>
    </div>
  );
};

export default Sidebar;
