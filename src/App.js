import React from 'react';
import './App.css';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/git' component={()=> window.location = 'https://github.com/Gtrakas1'}/>
      <Route path='/linkedin' component={()=> window.location = 'https://www.linkedin.com/in/george-trakas-0b665516a/'}/>
      <Route path='/facebook' component={()=> window.location = 'https://www.facebook.com/george.trakas.3'}/>
      <Route path='/resume' component={()=> window.location = 'https://drive.google.com/file/d/1OqG-Aqb25--ZFfadv_3MXqJjw587XIE4/view?usp=sharing'}/>
      
      </Switch>
    </div>
  );
}

export default App;
