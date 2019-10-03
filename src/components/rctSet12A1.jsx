import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getCarDetails } from './carDetails';

class RctSet12A1 extends Component {
    state = {  
        logo: ['https://i.imgur.com/gbkV3GX.png'],
        banner: ['https://i.imgur.com/DhHqrQQ.png'],
        cars: getCarDetails(),
        view: 0
    }

    handleList = () => {
        this.setState({ view: 1 })
    }
    handleGrid = () => {
        this.setState({ view: 0 })
    }
    handleDesktop = () => {
        this.setState({ view: 2 })
    }

    renderNav(){
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
        </div>
        );
    }

    render() { 
        if(this.state.view === 0){
        return ( 
            <div>
            {this.renderNav()}<br/>
            <div className="row-inline text-center">  
                <h5>VIEW</h5>
                <div className="col">
                    <button onClick={this.handleList} className="btn btn-light mr-2"><i class="fa fa-list" aria-hidden="true"></i></button>
                    <button onClick={this.handleGrid} className="btn btn-light mr-2"><i class="fa fa-th" aria-hidden="true"></i></button>
                    <button onClick={this.handleDesktop} className="btn btn-light mr-2"><i class="fa fa-desktop" aria-hidden="true"></i></button>
                </div>   
            </div>
            <div className="container">
                           
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
         );
            }
            if(this.state.view === 1){
                return(
                    <div>
                         {this.renderNav()}<br/>
                            <div className="row-inline text-center">  
                                <h5>VIEW</h5>
                                <div className="col">
                                    <button onClick={this.handleList} className="btn btn-light mr-2"><i class="fa fa-list" aria-hidden="true"></i></button>
                                    <button onClick={this.handleGrid} className="btn btn-light mr-2"><i class="fa fa-th" aria-hidden="true"></i></button>
                                    <button onClick={this.handleDesktop} className="btn btn-light mr-2"><i class="fa fa-desktop" aria-hidden="true"></i></button>
                                </div>   
                            </div>   
                            <div className="row">
                                <div className="col-4">
                                {this.state.cars.map(data => { 
                                return (
                                    <div>
                                    <img src={data.image} 
                                    style={{width:'40%',height:'40%'}}
                                    />
                                    </div>
                                 )
                                })}

                                </div>
                                <div className="col">

                                </div>

                            </div>  
                    </div>
                )
            }
            if(this.state.view === 2){
                return(
                    <div>
                         {this.renderNav()}<br/>
                            <div className="row-inline text-center">  
                                <h5>VIEW</h5>
                                <div className="col">
                                    <button onClick={this.handleList} className="btn btn-light mr-2"><i class="fa fa-list" aria-hidden="true"></i></button>
                                    <button onClick={this.handleGrid} className="btn btn-light mr-2"><i class="fa fa-th" aria-hidden="true"></i></button>
                                    <button onClick={this.handleDesktop} className="btn btn-light mr-2"><i class="fa fa-desktop" aria-hidden="true"></i></button>
                                </div>   
                            </div>
                    </div>
                )
            }
    }
}
 
export default RctSet12A1;