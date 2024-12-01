import React from "react";

const MetricsCard = ({ title, value, description, color }) => {
  return (
    <div
      className={`flex flex-col items-start p-4 bg-white shadow-md rounded-lg border-l-4 h-36`}
      style={{ borderColor: color }}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <p className="text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export default MetricsCard;
