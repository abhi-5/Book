import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

class NavBar1 extends Component {
    render() { 
      return ( 
        <div className="container">
       <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" to="/" style={{color:'white'}}>Courses</a>
          <Link className="navbar-brand mr-auto" to="/react" style={{color:'grey'}}>React</Link>
          <Link className="navbar-brand " to="/angular" style={{color:'grey',textAlign:'left'}}>Angular</Link>
          <Link className="navbar-brand " to="/js" style={{color:'grey'}}>JavaScript</Link>
    
      </nav> 
      <div className="content">
      <Route path="/react" />
      </div>
      </div>
  );
}
}


export default NavBar1;
