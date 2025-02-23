import React from "react";

const ThemesList = ({ themes }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">Themes</h2>
      <ul className="mt-2">
        {themes.map((theme, index) => (
          <li key={index} className="flex justify-between text-sm p-2 bg-gray-100 rounded">
            {theme.name} <span className="font-bold">{theme.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemesList;
