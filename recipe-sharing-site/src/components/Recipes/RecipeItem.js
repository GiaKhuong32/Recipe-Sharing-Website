import React from 'react';

// Component hiển thị thông tin của một công thức [cite: 26]
const RecipeItem = ({ recipe }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      {/* Thêm ảnh placeholder nếu cần [cite: 28] */}
      <img src="https://via.placeholder.com/300" alt={recipe.title} style={{ maxWidth: '100%' }} />
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category}</p> {/* Hiển thị category badge [cite: 28] */}
      <p>Rating: {recipe.rating} / 5</p>
    </div>
  );
};

export default RecipeItem;