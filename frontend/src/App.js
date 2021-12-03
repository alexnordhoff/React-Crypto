// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AES from "./components/AES";
import RSA from "./components/RSA";
import Sha from "./components/Sha";

function App() {
  return (
    // <Router>
    //   <Header/>
    //   <Routes>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/Sha" component={Sha} />
    //       <Route path="/AES" component={AES} />
    //       <Route path="/RSA" component={RSA} />
    //   </Routes>
    // </Router>
    <div className='App'>
      <Header/>
    </div>
  );
}

export default App;
