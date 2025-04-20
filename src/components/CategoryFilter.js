import React from "react";

function CategoryFilter({ categories = [], selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>

      {/* Render All button manually */}
      <button
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => onSelectCategory("All")}
      >
        All
      </button>

      {/* Render category buttons (excluding "All") */}
      {categories
        .filter(category => category !== "All")
        .map(category => (
          <button
            key={category}
            className={category === selectedCategory ? "selected" : ""}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
    </div>
  );
}

export default CategoryFilter;

