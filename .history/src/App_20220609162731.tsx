import React from 'react';
import sidebar from './sidebar/sidebar';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="content">
      <Sidebar />
      <Content />
      </div>
      
    </div>
  );
}

export default App;
