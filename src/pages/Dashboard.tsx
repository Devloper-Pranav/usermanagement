import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
