import React, { Component } from 'react';

class LoginApp1 extends Component {
    state = { 
        employee : {
            name : "",
            age : "",
            gender : "",
            passport : "",
            license : "",
            city : ""
        }
     };

    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.employee);
        console.log('Submitted')
    }

    handleChange = e => {
        const { currentTarget : input } = e;
        const emp = {...this.state.employee };
        input.type === "checkbox"
           ? (emp[input.name] = input.checked)
           : (emp[input.name] = input.value);
        this.setState({ employee : emp })
    } 

    render() { 
        const { employee } = this.state ;
        return ( 
            <div className="container">
                <form ref="myForm" className="myForm">
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                value={employee.name}
                                onChange={this.handleChange}  
                                name="name"
                                id="name" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input
                                value={employee.age}
                                onChange={this.handleChange}
                                name="age" 
                                id="age" 
                                type="number" 
                                className="form-control" 
                            /> 
                        </div>
                    <div>
                        <div className="form-check form-check-inline">
                            <input
                              value="Male"
                              onChange={this.handleChange}
                              id="male"
                              name="gender"
                              type="radio"
                              checked={employee.gender === "Male"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="male">
                                 Male
                            </label>
                        </div>
                         <div className="form-check form-check-inline">
                            <input
                              value="Female"
                              onChange={this.handleChange}
                              id="female"
                              name="gender"
                              type="radio"
                              checked={employee.gender === "Female"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="female">
                                 Female
                            </label>
                        </div>
                        </div>
                    <div>
                            <div className="form-check">
                               <input
                                 value={employee.passport}
                                 onChange={this.handleChange}
                                 id="passport"
                                 name="passport"
                                 type="checkbox"
                                 checked={employee.passport}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="passport">
                                 Passport
                               </label>
                            </div>
                        </div>
                        <div>    
                             <div className="form-check">
                               <input
                                 value={employee.license} 
                                 onChange={this.handleChange}
                                 id="license"
                                 name="license"
                                 type="checkbox"
                                 checked={employee.license}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="license">
                                 License
                               </label>
                            </div>
                        </div>

                        <select 
                            value={employee.city}
                            onChange={this.handleChange}
                            id="city"
                            name="city"
                            className="form-control"
                        >
                            <option value="" disabled>
                                Select the City
                            </option>
                            <option>New Delhi</option>
                            <option>Bangalore</option>
                            <option>Pune</option>
                            <option>Hyderabad</option>
                        </select><br/>
                        <button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default LoginApp1;