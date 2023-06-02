import React, { useState } from 'react';
import { useQuery } from 'react-query';
import UserDisplay from './components/UserDisplay';
import fetchRandomUserData from './api/userApi';
import { User } from './types';
import './styles/styles.css';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { isLoading, isError, error, refetch } = useQuery<User>('randomUser', fetchRandomUserData, {
    onSuccess: (data) => {
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    },
  });

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div className="app">
      <h1 className="appTitle">Random User</h1>
      {isLoading && <p className="loadingMessage">Loading...</p>}
      {isError && <p className="errorMessage">Error: {error?.toString()}</p>}
      {user && <UserDisplay user={user} />}
      <button className="refreshButton" onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default App;
