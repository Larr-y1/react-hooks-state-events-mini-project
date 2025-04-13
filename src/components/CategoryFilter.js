import React, { useState } from "react";

function CategoryFilter({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleClick(category) {
    setSelectedCategory(category);
    onCategorySelect(category); // notify parent
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} className={selectedCategory === category ? "selected" : ""}
        onClick={() => handleClick(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
