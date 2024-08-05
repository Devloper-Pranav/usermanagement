import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../store/userSlice';
import { login } from '../services/auth';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const { token } = await login(email, password);
      dispatch(loginAction({ email, token }));
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 mt-8 p-4 max-w-md mx-auto ">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Sign In
      </button>
      <div className="text-center mt-4">
          <p className="text-sm text-gray-700">Do not have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link></p>
      </div>
    </form>
  );
};

export default SignIn;
