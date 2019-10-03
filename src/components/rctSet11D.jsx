import React, { Component } from 'react';

class RctSet11D extends Component {
    state = { 
        detail : { name: '', email:'' },
        details: [],
        errors: {}
    }

    handleChange = ({ currentTarget: input}) => {
        const detail = {...this.state.detail};
        detail[input.name] = input.value;
        this.setState({ detail });
    }

    validate = () => {
        const errors = {};
        const { detail } = this.state;
        if(detail.name.trim() === ''){
            errors.name = 'Name must be 8 characters long';
        }else if(detail.name.length < 8){
            errors.name = 'Name must be 8 characters long';
        }
        if(detail.email.trim() === ''){
            errors.email = 'Not a valid email';
        }else if( !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(detail.email)){
            errors.email = 'Not a valid email';
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

    };
    
    render() { 
        const { detail, details, errors } = this.state;
        return ( 
            <div className="container">
                <form ref="myForm" className="myForm">
                
                <div className="form-group" >
                    <div>
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
                </form>

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
                           Email = {data.email}
                        </div>
                    )
                })}
               

            </div>
         );
    }
}
 
export default RctSet11D;