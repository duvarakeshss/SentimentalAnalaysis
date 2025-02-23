import React from "react";

const SnippetsList = ({ snippets }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">Snippets</h2>
      <ul className="mt-2">
        {snippets.map((snippet, index) => (
          <li key={index} className="p-2 border-b">
            <p>{snippet.text}</p>
            <span className="text-xs text-gray-500">{snippet.subtopic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnippetsList;
