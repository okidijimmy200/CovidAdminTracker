import React from 'react';
import Sidebar from './sidebar/sidebar';
import Content from './core/content';
import './App.scss';

function App() {
  return (
    <div data-testid='container' className="container">
      <div className="content">
      <Sidebar />
      <Content />
      </div>
      
    </div>
  );
}

export default App;
