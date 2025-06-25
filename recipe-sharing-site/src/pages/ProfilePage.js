import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import RecipeList from '../components/Recipes/RecipeList';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [createdRecipes, setCreatedRecipes] = useState([]);
  // Giả sử 'favoriteRecipes' được lưu trong localStorage hoặc lấy từ API
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    if (currentUser) {
      // Lấy các công thức do người dùng tạo (giả sử API hỗ trợ query theo userId)
      // Trong mock API, chúng ta sẽ cần phải filter thủ công hoặc thêm userId vào recipes
      // Ví dụ: axios.get(`http://localhost:3001/recipes?author=${currentUser.username}`)
    }
  }, [currentUser]);

  // Nếu người dùng chưa đăng nhập, chuyển hướng về trang login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const profileStyle = { padding: '2rem', maxWidth: '960px', margin: 'auto' };
  const avatarStyle = { width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' };

  return (
    <div style={profileStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <img src={currentUser.profilePicture} alt={currentUser.username} style={avatarStyle} />
        <div>
          <h1>{currentUser.username}</h1>
          <p>{currentUser.email}</p>
          {/* Nơi để thêm form chỉnh sửa thông tin hoặc sở thích ăn uống */}
        </div>
      </div>

      <hr />

      <section>
        <h2>My Created Recipes</h2>
        {createdRecipes.length > 0 ? <RecipeList recipes={createdRecipes} /> : <p>You haven't created any recipes yet.</p>}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>My Favorite Recipes</h2>
        {favoriteRecipes.length > 0 ? <RecipeList recipes={favoriteRecipes} /> : <p>You haven't favorited any recipes yet.</p>}
      </section>
    </div>
  );
};

export default ProfilePage;