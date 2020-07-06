import React from 'react';
import '../App.css';

function Header(props = {}) {
  return (
    <header
      className="text-white flex"
      style={{ backgroundColor: '#0573fe', height: '200px' }}
    >
      <div className="container m-auto text-center">
        <h1 className="text-5xl font-black">JS Explanator</h1>
        <p>The list of common usecases to learn javascript quickly.</p>
      </div>
    </header>
  );
}

export default Header;
