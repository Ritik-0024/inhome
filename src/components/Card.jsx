import React from "react";

const Card = ({ title, description, icon, onClick, bgColor}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
