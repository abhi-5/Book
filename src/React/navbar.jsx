import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <div className="container">
                <nav className="navbar navbar-light bg-dark" >
                <nav className="navbar-items">
                    <a className="navbar-brand" style={{color:'white'}}href="#">ProdStoreSys </a>
                    <a className="navbar-brand" style={{color:'grey'}} href="#">
                        Products{""}
                        <span className="badge badge-pill badge-secondary">
                            {this.props.products} 
                        </span>
                    </a>
                    <a className="navbar-brand" style={{color:'grey'}} href="#">
                        Quantity{""}
                        <span className="badge badge-pill badge-secondary">
                            {this.props.quantity} 
                        </span>
                    </a>
                    <a className="navbar-brand" style={{color:'grey'}} href="#">
                        Value{""}
                        <span className="badge badge-pill badge-secondary">
                            {this.props.value} 
                        </span>
                    </a>
                    </nav>     
            </nav>
            </div>
         );
    }
}
 
export default NavBar;