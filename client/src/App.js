
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , InputGroup , FormControl ,Button , Row , Card} from 'react-bootstrap';
import React,{ useState,useEffect } from 'react';
import Home from './Components/Home';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


export default function App() {
  return (
    <div>
       
      <Navbar />
      <Footer />
    </div>
  )
}
