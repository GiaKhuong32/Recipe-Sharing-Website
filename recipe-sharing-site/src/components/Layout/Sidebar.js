import React from 'react';
import { Link } from 'react-router-dom';
import FilterBar from '../Recipes/FilterBar'; // Chúng ta sẽ tạo FilterBar ngay sau đây

const Sidebar = ({ onFilterChange, onSortChange, onSearch }) => {
  const sidebarStyle = {
    width: '250px',
    padding: '1rem',
    borderRight: '1px solid #dee2e6',
    height: '100vh', // Chiều cao đầy đủ
  };

  const navLinkStyle = {
      display: 'block',
      margin: '1rem 0',
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold'
  }

  return (
    <aside style={sidebarStyle}>
      <h3>Navigation</h3>
      <nav>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/profile" style={navLinkStyle}>My Profile</Link>
        {/* Thêm các link khác như "My Meal Plan", "Favorites" */}
      </nav>
      <hr />
      {/* Tích hợp FilterBar vào Sidebar */}
      <FilterBar
        onFilterChange={onFilterChange}
        onSortChange={onSortChange}
        onSearch={onSearch}
       />
    </aside>
  );
};

export default Sidebar;