import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
  );
};

export default ServiceCard;
