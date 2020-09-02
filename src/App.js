import React from 'react';
import './App.css';
import Header from './components/header/header';
import HomePage from './components/home/homepage';
import Work from './components/project/projects';
import About from './components/about/about';
import Contact from './components/contact/contact';

const App = () => (

  <div className="App">
    <Header />
    <HomePage />
    <Work />
    <About />
    <Contact />
  </div>
)



export default App;
