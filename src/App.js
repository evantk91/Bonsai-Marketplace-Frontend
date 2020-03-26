import React from 'react';
import UserSignup from './components/UserSignup';
import CoverPhoto from './components/CoverPhoto';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <h1>Greer Bonsai Marketplace</h1>
      </header>
      <UserSignup/>
      <CoverPhoto/>
      <header className="page-footer">
        <h2>Created By: Evan Greer</h2>
      </header>
    </div>
  );
}

export default App;
