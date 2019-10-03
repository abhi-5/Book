import React, { Component } from 'react';

class LoginCountry extends Component {
    state = { 
        locs : [
            	{country: "India", cities: ["New	Delhi",	"Mumbai",	"Bangalore",	"Chennai",	"Pune"]},
				{country: "USA", cities: ["Los	Angeles", "Chicago", "New	York", "Seattle", "Washington	DC"]},
				{country: "France", cities: ["Paris",	"Nice",	"Lyon",	"Cannes"]},
				{country: "Japan", cities: ["Tokyo",	"Kyoto"]},
				{country: "China", cities: ["Shanghai",	"Beijing",	"Shenzen"]}
        ],
        location : { country: "", city: ""  },
        value : [],
     
     }

    handleChange = (e) => {
        const { currentTarget: input } = e;
        const location = {...this.state.location};
        location[input.name] = input.value;
        this.setState({ location });
        try{
        const obj = this.state.locs.find(data => data.country === input.value) 
        this.setState({ value : obj.cities })
        }catch(ex){

        }           
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.location);
        console.log(this.state.value)
        alert('Country : ' + this.state.location.country + ', ' + 'City : ' + this.state.location.city)
       
    }

    render() { 
        const { location } = this.state; 

        return ( 
            <div className="container col-4">
                <form ref="myForm" className="myForm">
                    <select  
                        value={location.country}
                        onChange={this.handleChange}
                        id="country"
                        name="country"
                        className="form-control"
                    >
                        <option>Choose Country</option>
                        {this.state.locs.map((data,i) => {
                            return (
                              <option key={i}>{data.country}</option>
                            );
                        } )}               
                    </select>

                    <select
                        value={location.city}
                        onChange={this.handleChange}
                        id="city"
                        name="city"  
                        className="form-control"
                    >
                        <option>Choose City</option>
                       
                           {this.state.value.map((data,i) => {
                            return(
                                <option key={i}>{data}</option>
                            );
                        })
                           
                         }                  
                    </select><br/>
                    <button onClick={this.handleSubmit} className="btn btn-primary btn-md">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default LoginCountry;