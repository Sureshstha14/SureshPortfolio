import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin123') {  
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="login-container p-4 m-auto mt-4 border-gray-600 border-1 rounded-md shadow-md w-1/2  ">
      <h2>Admins Login</h2>
      <p>Welcome to Admin Page.</p>
      <span className='font-bold text-blue-500 text-xl mr-36'>Password</span><br/>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter password" 
        className='border-2 border-black p-2 m-2 rounded-sm'
      /> 
      <button onClick={handleLogin} className='border-1 border-gray-700 p-2 m-2 bg-blue-500 hover:bg-blue-400 shadow-sm rounded-md'>Login</button>
    </div>
  );
};

export default AdminLogin;
