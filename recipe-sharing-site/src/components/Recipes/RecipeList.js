import React from 'react';
import RecipeItem from './RecipeItem';

// Component để hiển thị danh sách các công thức [cite: 26]
const RecipeList = ({ recipes }) => {
  return (
    // Sử dụng CSS Grid cho layout [cite: 28, 93]
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
      {recipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;