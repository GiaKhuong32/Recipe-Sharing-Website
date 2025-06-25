import React, { useState } from 'react';

const FilterBar = ({ onFilterChange, onSortChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Gọi hàm search từ props
  };

  const inputStyle = { width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' };
  const selectStyle = { width: '100%', padding: '8px', marginBottom: '10px' };

  return (
    <div>
      <h4>Search & Filter</h4>

      {/* 1. Search Bar */}
      <input
        type="text"
        placeholder="Search by title, ingredient..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={inputStyle}
      />

      {/* 2. Filter by Category */}
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={(e) => onFilterChange('category', e.target.value)} style={selectStyle}>
          <option value="">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      {/* 3. Sort Recipes */}
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" onChange={(e) => onSortChange(e.target.value)} style={selectStyle}>
          <option value="newest">Date (Newest)</option>
          <option value="oldest">Date (Oldest)</option>
          <option value="rating_high">Rating (Highest)</option>
          <option value="rating_low">Rating (Lowest)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;