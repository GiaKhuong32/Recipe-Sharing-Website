import React, { useState, useEffect } from 'react';
import RecipeList from '../components/Recipes/RecipeList';
import axios from 'axios';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sử dụng useEffect để fetch dữ liệu khi component được mount [cite: 95]
    const fetchRecipes = async () => {
      try {
        // Gọi API từ json-server
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
      } catch (err) {
        // Xử lý lỗi nếu API không khả dụng [cite: 59]
        setError('Failed to load recipes. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>; // Hiển thị spinner 
  if (error) return <div>{error}</div>; // Hiển thị thông báo lỗi [cite: 59]

  return (
    <div>
      <h1>All Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;