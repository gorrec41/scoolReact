import React from 'react';
import logo from './logo.svg';
import './App.css';
import Acordion from './components/Acordion/Acordion';
import Apptitle from './components/Apptitle/Apptitle';
import Reiting from './components/Reiting/Reiting';

function App() {
  return (
    <div>
      <Apptitle />
      <Reiting />
      <Acordion />
      <Reiting />
    </div>
  );
}

export default App;
