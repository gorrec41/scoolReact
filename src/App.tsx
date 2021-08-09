import React from 'react';
import './App.css';
import Acordion from './components/Acordion/Acordion';
import Pagetitle from './components/Pagetitle/Pagetitle';
import Reiting from './components/Reiting/Reiting';

function App() {
  return (
    <div>
      <Pagetitle title={"This is APP component"}/>
      Artical 1
      <Reiting value={1}/>
      <Acordion />
      <Pagetitle title={"React"}/>
      Artical 2
      <Reiting value={3}/>
    </div>
  );
}

export default App;
