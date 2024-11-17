import React from "react";

const Filter = ({ onFilter }) => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onFilter("title", e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => onFilter("rating", e.target.value)}
        style={{ padding: "5px" }}
        min="1"
        max="5"
      />
    </div>
  );
};

export default Filter;
