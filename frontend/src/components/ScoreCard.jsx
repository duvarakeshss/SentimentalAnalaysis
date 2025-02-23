import React from "react";

const ScoreCard = ({ title, value, description }) => {
  return (
    <div className="p-6 text-center border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ScoreCard;
