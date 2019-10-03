import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getCarDetails } from './carDetails';

class RctSet12A extends Component {
    state = {  
        logo: ['https://i.imgur.com/gbkV3GX.png'],
        banner: ['https://i.imgur.com/DhHqrQQ.png'],
        cars: getCarDetails(),
    }

    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src = {this.state.logo} width = "60" height = "40"/>
                    </Link>
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/buyers">
                                    Buyers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sellers">
                                    Sellers
                                </Link>
                            </li>
                        </ul>
                        
                       
                    </div>            

                </nav>

                <div className="container">
                    <img src = {this.state.banner} width = "1100" height = "250" />
                </div><br/>
                
                <div className="row"> 
                    <div className="col-3">
                    Left Panel
                    </div>
                   
                    <div className="col-9">
                        <div className="row">
                            {this.state.cars.map(data => {
                                return (
                                    <div className="col-sm-4">       
                                        <div class="card" style={{width: '18rem'}}>
                                        <img class="card-img-top" src={data.image} 
                                            style={{width:'100%',height:'15vw',objectFit:'cover'}} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title"><i className="fa fa-inr"></i>{data.price}</h5>
                                                <div class="card-text">
                                                    {data.year} - {data.miles} km<br/>
                                                    {data.make} {data.model}, {data.year}, {data.fuel}<br/>
                                                    {data.location}, {data.city}   
                                                    <div className="text-right">{data.postedOn}</div>
                                                </div>
                                               
                                            </div>
                                        </div> 
                                        <br/> 
                                    </div>
                                )
                            })}
                        
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default RctSet12A;