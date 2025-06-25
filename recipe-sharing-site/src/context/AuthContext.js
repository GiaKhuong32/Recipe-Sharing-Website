import React, { createContext, useState, useContext, useEffect } from 'react';

// Tạo Context
const AuthContext = createContext(null);

// Tạo Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Kiểm tra localStorage khi ứng dụng khởi động để duy trì phiên đăng nhập
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Hàm đăng ký
  const register = (username, email, password, profilePicture) => {
    // Trong thực tế, bạn sẽ gọi API ở đây.
    // Với mock, chúng ta lưu vào localStorage.
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert('Email already exists!');
      return false;
    }

    const newUser = { username, email, password, profilePicture: profilePicture || 'https://via.placeholder.com/150' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    return true;
  };

  // Hàm đăng nhập
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Lưu thông tin người dùng vào localStorage để duy trì phiên
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      return true;
    } else {
      alert('Invalid email or password');
      return false;
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => {
  return useContext(AuthContext);
};