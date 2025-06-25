import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetailPage = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching recipe details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!recipe) return <div>Recipe not found.</div>;

  const detailStyle = { maxWidth: '800px', margin: '2rem auto', padding: '2rem', border: '1px solid #eee', borderRadius: '8px' };

  return (
    <div style={detailStyle}>
      <h1>{recipe.title}</h1>
      <p><strong>Category:</strong> {recipe.category} | <strong>Rating:</strong> {recipe.rating} / 5</p>
      <p>{recipe.description}</p>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0' }}>
          <span><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</span>
          <span><strong>Servings:</strong> {recipe.servings}</span>
      </div>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p style={{whiteSpace: 'pre-wrap'}}>{recipe.instructions}</p>

      <hr />

      {/* Phần bình luận sẽ được thêm vào đây */}
      <h3>Comments</h3>
      {recipe.comments && recipe.comments.length > 0 ? (
        recipe.comments.map(comment => (
            <div key={comment.id} style={{borderBottom: '1px solid #eee', padding: '10px 0'}}>
                <strong>{comment.username}</strong>
                <p>{comment.text}</p>
                <small>{new Date(comment.timestamp).toLocaleString()}</small>
            </div>
        ))
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}
      {/* Thêm form để đăng bình luận ở đây */}
    </div>
  );
};

export default RecipeDetailPage;