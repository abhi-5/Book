import React, { Component } from 'react';
import Input  from './input';

class LoginInput extends Component {
     state = {
        account : { username: '' , password: '' },
        errors : {}
    }

    validate = () => {
        const errors = {};
        const { account } = this.state;
        if(account.username.trim() === '')
            errors.username = 'Username is required.';
        if(account.password.trim() === '')
            errors.password = 'Password is required.';

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} })
        if (errors) return;

        console.log('Submitted');
        console.log(errors)
        console.log(this.state.account)

    };

    validateProperty = ({ name, value }) => {
        if(name === "username"){
            if(value.trim() === "") return "Username is required."
        }
        if(name === "password"){
            if(value.trim() === "") return "Password is required."
        }
    };

    handleChange = ({ currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account , errors});
    }

    render() { 
        const { account, errors } = this.state;
        return ( 
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                   <Input
                      name="username"
                      value={account.username}
                      label="Username"
                      onChange={this.handleChange} 
                      error={errors.username}
                   />
                    <Input
                      name="password"
                      value={account.password}
                      label="Password"
                      onChange={this.handleChange} 
                      error={errors.password}
                   />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default LoginInput;