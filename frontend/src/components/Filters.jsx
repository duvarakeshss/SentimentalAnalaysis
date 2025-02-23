import React from "react";

const Filters = () => {
  return (
    <div className="flex justify-end space-x-4">
      <button className="px-4 py-2 border border-gray-500 text-gray-700 rounded hover:bg-gray-100">
        Share
      </button>
      <button className="px-4 py-2 border border-gray-500 text-gray-700 rounded hover:bg-gray-100">
        Export
      </button>
      <button className="px-4 py-2 border border-gray-500 text-gray-700 rounded hover:bg-gray-100">
        Filters
      </button>
    </div>
  );
};

export default Filters;
