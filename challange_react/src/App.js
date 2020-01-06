import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Contactus from './pages/Contactus'
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Home/> */}
          <Contactus/>
      </div>
    )
  }
}

export default App;
