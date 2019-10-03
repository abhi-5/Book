import React, { Component } from 'react';

class RctSet11D2 extends Component {
    state = { 
        detail : { name: '', email:'', age:'', language:'', gender:'', relocate:'' },
        details: [],
        errors: {}
    }

    handleChange = ({ currentTarget: input}) => {
        const detail = {...this.state.detail};
        input.type === "checkbox"
           ? (detail[input.name] = input.checked)
           : (detail[input.name] = input.value);
        this.setState({ detail });
    }

    validate = () => {
        const errors = {};
        const { detail } = this.state;

        
            if(detail.name.length < 8){
                errors.name = 'Name must be 8 characters long';
            }
        
 
        
            if( !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(detail.email)){
                errors.email = 'Not a valid email';
            }
        

            if(detail.age < 16){
                errors.age = 'Age should be atleast 16';
            }
        

            if(detail.gender.trim() === ''){
                errors.gender = 'Gender is mandatory';
            }
        

            if(detail.language.trim() === ''){
                errors.language = 'Select the Language';
            }
        

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} })
        if (errors) return;

        this.state.details.push(this.state.detail);
        this.setState({ details : this.state.details });
        console.log(errors)
        console.log(this.state.detail)
        console.log(this.state.details)

    };

    render() { 
        const { detail, details, errors } = this.state;
        return ( 
            <div className="container">
                <form ref="myForm" className="myForm">
                
                <div className="form-group" >
                   <label style={{float:'left', width:'17%', textAlign: 'left' }}> Name : </label>
                    <input 
                        value={detail.name}
                        onChange={this.handleChange}  
                        name="name"
                        id="name" 
                        type="text" 
                        placeholder="Enter the name"
                        style={{float:'center', width:'25%' }}
                    />
                    { errors && <h6 className="text-danger">{errors.name}</h6> }
                </div>
                
                <div className="form-group">
                <label style={{float:'left', width:'17%', textAlign: 'left' }}> Email : </label>
                    <input 
                        value={detail.email}
                        onChange={this.handleChange}  
                        name="email"
                        id="email" 
                        type="text" 
                        placeholder="Enter the email address"
                        style={{float:'center', width:'25%' }}
                    />
                    { errors && <h6 className="text-danger">{errors.email}</h6> }
                </div>

                <div className="form-group">
                <label style={{float:'left', width:'17%', textAlign: 'left' }}> Age : </label>
                    <input 
                        value={detail.age}
                        onChange={this.handleChange}  
                        name="age"
                        id="age" 
                        type="number" 
                        placeholder="Enter the age"
                        style={{float:'center', width:'25%' }}
                    />
                    { errors && <h6 className="text-danger">{errors.age}</h6> }
                </div>

                <div>
                <label style={{float:'left', width:'17%', textAlign: 'left' }}> Language : </label>
                <select 
                            value={detail.language}
                            onChange={this.handleChange}
                            id="language"
                            name="language"
                            style={{float:'center', width:'15%' }}
                        >
                            <option value="" selected disabled>
                                Select Language
                            </option>
                            <option>Angular</option>
                            <option>AngularJS</option>
                            <option>React</option>
                            <option>Vue</option>
                        </select>
                </div>
                { errors && <h6 className="text-danger">{errors.language}</h6> }
                        <br/>

                <div className="form-check form-check-inline">
                <label style={{float:'left', textAlign: 'left' }}> Gender : </label>
                            <input
                              value="Male"
                              onChange={this.handleChange}
                              id="male"
                              name="gender"
                              type="radio"
                              checked={detail.gender === "Male"}
                              className="form-check-input"
                              style={{float:'center' }}
                            />
                            <label className="form-check-label" htmlFor="male">
                                 Male
                            </label>
                        {/* </div>
                         <div className="form-check form-check-inline"> */}
                            <input
                              value="Female"
                              onChange={this.handleChange}
                              id="female"
                              name="gender"
                              type="radio"
                              checked={detail.gender === "Female"}
                              className="form-check-input"
                              style={{float:'center' }}
                            />
                            <label className="form-check-label" htmlFor="female">
                                 Female
                            </label>
                            
                        </div>
                        { errors && <h6 className="text-danger">{errors.gender}</h6> }

                        <div className="form-check">
                        <label style={{float:'left', width:'17%', textAlign: 'left' }}></label>
                               <input
                                value={detail.relocate}
                                onChange={this.handleChange}
                                id="relocate"
                                name="relocate"
                                type="checkbox"
                                checked={detail.relocate}
                                className="form-check-input"
                                style={{float:'center' }}
                               />
                               <label className="form-check-label" htmlFor="relocate">
                                Can relocate
                               </label>
                            </div>

                </form><br/>

                <div className="row text-center">
                <div className="col-5">
                    <button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                </div>
            </div>
                
                <br/>
               
                {details.map(data => {
                    return (
                        <div>
                           Details entered are <br/>
                           Name = {data.name} <br/>
                           Email = {data.email} <br/>
                           Age = {data.age} <br/>
                           Langugae = {data.language} <br/>
                           Gender = {data.gender} <br/>
                           Relocate = {data.relocate} <br/>
                        </div>
                    )
                })}
               

            </div>
         );
    }
}
 
export default RctSet11D2;