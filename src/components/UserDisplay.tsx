import React from 'react';
import { User } from '../types';

const UserDisplay: React.FC<{ user: User }> = ({ user }) => {
  const { name, email } = user;
  return (
    <div className="userDisplay">
      <p className="userName">{`${name.title} ${name.first} ${name.last}`}</p>
      <p className="userEmail">{email}</p>
    </div>
  );
};

export default UserDisplay;
