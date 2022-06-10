import React from 'react';
import Sidebar from './sidebar/sidebar';
import Content from './core/content';
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
