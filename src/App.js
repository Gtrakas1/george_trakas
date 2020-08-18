import React from 'react';
import './App.css';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/homepage.jsx'
import About from './pages/about/about.jsx'

const App = () => (

  <div className="App">
    <Header />
    <HomePage />
    <About />
  </div>
)



export default App;
