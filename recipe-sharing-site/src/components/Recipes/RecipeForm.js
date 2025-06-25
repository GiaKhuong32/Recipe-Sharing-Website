import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [servings, setServings] = useState('');
  const [category, setCategory] = useState('Breakfast');
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy id từ URL để biết là đang edit hay create

  // Nếu có 'id', fetch dữ liệu công thức để edit
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/recipes/${id}`)
        .then(response => {
          const recipe = response.data;
          setTitle(recipe.title);
          setDescription(recipe.description);
          setIngredients(recipe.ingredients);
          setInstructions(recipe.instructions);
          setCookingTime(recipe.cookingTime);
          setServings(recipe.servings);
          setCategory(recipe.category);
        })
        .catch(error => console.error("Error fetching recipe:", error));
    }
  }, [id]);

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = { title, description, ingredients, instructions, cookingTime: Number(cookingTime), servings: Number(servings), category };

    const request = id
      ? axios.put(`http://localhost:3001/recipes/${id}`, recipeData) // Cập nhật nếu có id
      : axios.post('http://localhost:3001/recipes', recipeData);   // Tạo mới nếu không có id

    request
      .then(() => {
        alert(`Recipe ${id ? 'updated' : 'created'} successfully!`);
        navigate('/'); // Chuyển về trang chủ
      })
      .catch(error => console.error("Error saving recipe:", error));
  };

  // Styles
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' };
  const inputStyle = { padding: '0.5rem' };
  const buttonStyle = { padding: '0.75rem', cursor: 'pointer' };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>{id ? 'Edit Recipe' : 'Create a New Recipe'}</h2>
      <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={inputStyle} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={inputStyle} />

      <div>
        <label>Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <input key={index} type="text" value={ingredient} onChange={(e) => handleIngredientChange(index, e)} placeholder={`Ingredient ${index + 1}`} style={{...inputStyle, marginBottom: '5px'}}/>
        ))}
        <button type="button" onClick={addIngredientField} style={{...buttonStyle, backgroundColor: '#6c757d'}}>Add Ingredient</button>
      </div>

      <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required style={{...inputStyle, height: '150px'}} />
      <input type="number" placeholder="Cooking Time (minutes)" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required style={inputStyle} />
      <input type="number" placeholder="Servings" value={servings} onChange={(e) => setServings(e.target.value)} required style={inputStyle} />
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit" style={{...buttonStyle, backgroundColor: '#007bff', color: 'white'}}>{id ? 'Update Recipe' : 'Create Recipe'}</button>
    </form>
  );
};

export default RecipeForm;