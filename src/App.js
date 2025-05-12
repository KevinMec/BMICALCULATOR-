// src/App.js
import React from 'react';
import BMICalculator from './components/BMICalculator';
import './App.css'; // Importamos el CSS personalizado

function App() {
  return (
    <div className="center-container">
      <BMICalculator />
    </div>
  );
}

export default App;