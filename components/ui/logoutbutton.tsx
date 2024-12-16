'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    // Appel de signOut fourni par NextAuth
    signOut({
      callbackUrl: '/login', // Redirection après déconnexion
    });
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '10px 20px',
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
