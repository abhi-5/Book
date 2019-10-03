import React, { Component } from 'react';
import Input  from './input';

class LoginEmp extends Component {
    state = { 
        employee : { name: '', age: '', email: '', city: '' },
        errors : {}
     }

     validate = () => {
        const errors = {};
        const { employee } = this.state;
        if(employee.name.trim() === ''){
            errors.name = 'Required, minimum 5 characters';
        }else if(employee.name.length < 5){
            errors.name = 'Required, minimum 5 characters';
        }

        if(employee.age.trim() === ''){
            errors.age = 'Required, should be a number greater than 20';
        }else if(employee.age < 21){
            errors.age = 'Required, should be a number greater than 20';
        }

        if(employee.email.trim() === ''){
            errors.email = 'Required, should have the character @ in it';
        }else if( !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(employee.email)){
            errors.email = 'Required, should have the character @ in it';
        }
 
        if(employee.city.trim() === ''){
            errors.city = 'Required, minimum 3 characters'; 
        }else if(employee.city.length < 3){
            errors.city = 'Required, minimum 3 characters';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} })
        if (errors) return;

        if(errors === null){
            alert('Successfully Submitted')
        }

        console.log('Submitted');
        console.log(errors)
        console.log(this.state.employee)

    };

    handleChange = ({ currentTarget: input}) => {
        const employee = {...this.state.employee};
        employee[input.name] = input.value;
        this.setState({ employee });
    }

    render() { 
        const { employee, errors } = this.state;

        return ( 
            <div className="container">
                <h4>LoginEmp</h4>
                <form onSubmit={this.handleSubmit}>
                   <Input
                      name="name"
                      value={employee.name}
                      label="Name"
                      onChange={this.handleChange} 
                      error={errors.name}
                   />
                    <Input
                      name="age"
                      value={employee.age}
                      label="Age"
                      onChange={this.handleChange} 
                      error={errors.age}
                   />
                    <Input
                      name="email"
                      value={employee.email}
                      label="Email"
                      onChange={this.handleChange} 
                      error={errors.email}
                   />
                    <Input
                      name="city"
                      value={employee.city}
                      label="City"
                      onChange={this.handleChange} 
                      error={errors.city}
                   />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginEmp;