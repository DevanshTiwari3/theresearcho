import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Researcho</h1>
        <p>My ultimate platform for educational resources and self-study.</p>
        <p>Features coming soon:</p>
        <ul>
          <li>Lectures and interactive learning materials</li>
          <li>Quizzes to test your knowledge</li>
          <li>Study planner and timers</li>
          <li>PDF viewer for notes and resources</li>
          <li>Live study sessions and video chat mentorship</li>
          <li>Student activity tracker</li>
          <li>Student shopping for necessary materials</li>
        </ul>
        <a
          className="App-link"
          href="https://theresearho.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Website
        </a>
      </header>
    </div>
  );
}

export default App; 

