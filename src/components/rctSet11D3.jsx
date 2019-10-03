import React, { Component } from 'react';

class RctSet11D3 extends Component {
    state = { 
        data : ['Jack','Bob','Kate','Mary','Martins','Bill','Steve'],
        detail : { name: '', password1:'', password2:'' },  
        name : '',    
        errors : {}
    }

    handleChange = ({ currentTarget: input}) => {
        const detail = {...this.state.detail};
        detail[input.name] = input.value;
        this.setState({ detail });
    }

    validate = () => {
        const errors = {};
        const { detail, data } = this.state;
        if(detail.name.trim() === ''){
            errors.name = 'Name is required';
        }else if(data.find(name => name === detail.name) ){
            errors.name = 'This name has already been taken';
        }
        
        if(detail.password1.trim() === ''){
            errors.password1 = 'Password must be atleast 8 characters long and contains a number and an alphabet';
        }else if( !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(detail.password1) ){
            errors.password1 = 'Password must be atleast 8 characters long and contains a number and an alphabet';
        }

        if(detail.password2.trim() === ''){
            errors.password2 = 'Re-enter the Password';
        }else if (detail.password1 !== detail.password2){
            errors.password2 = 'Password do not match';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} })
        if (errors) return;
       
        this.setState({ name : this.state.name = this.state.detail.name})

        console.log(errors)
        console.log(this.state.detail)

    };

    render() { 
        const { detail, name, errors } = this.state;
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
                <label style={{float:'left', width:'17%', textAlign: 'left' }}> Password : </label>
                    <input 
                        value={detail.password1}
                        onChange={this.handleChange}  
                        name="password1"
                        id="password1" 
                        type="text" 
                        placeholder="Enter the password"
                        style={{float:'center', width:'25%' }}
                    />
                    { errors && <h6 className="text-danger">{errors.password1}</h6> }
                </div>

                <div className="form-group">
                <label style={{float:'center', width:'17%', textAlign: 'left' }}> </label>
                    <input 
                        value={detail.password2}
                        onChange={this.handleChange}  
                        name="password2"
                        id="password2" 
                        type="text" 
                        placeholder="Re-enter password"
                        style={{float:'center', width:'25%' }}
                    />
                    { errors && <h6 className="text-danger" style={{float:'right', width:'83%', textAlign: 'left' }} >{errors.password2}</h6> }
                </div>

                </form>
                    <br/>
                <div className="row text-center">
                <div className="col-5">
                <button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                </div>
            </div>
                
                <br/>
               
                { name === '' ? "" : <label>Hi {name}, Form Submitted.</label> }

            </div>
         );
    }
}
 
export default RctSet11D3;