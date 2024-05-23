import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import { useNavigate } from "react-router-dom";
import Home from './Home';
import Search from './Search';
import Footer from './Footer';
// import Library from './components/Library';
// import NotFound from './components/NotFound';
import {Container , InputGroup , FormControl ,Button , Navbar , Nav , Row , Col , Card} from 'react-bootstrap';
function Navigate() {
  return (
    <Router>
    
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
    
        <Navbar.Brand href="#">My Music App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href='/Search'>Search</Nav.Link>
            <Nav.Link href="#">Your Library</Nav.Link>
     
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          {/* <Route path="/library" component={Library} />
          <Route component={NotFound} /> This route handles 404 errors */}
        </Routes>
      
      
    
    </Router>
    
  );
}
export default Navigate;