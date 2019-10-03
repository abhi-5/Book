import React, { Component } from 'react';

class LoginCustomer extends Component {
    state = { 
        customer : {
            name : "",
            gender : "",
            delivery : "",
            creditCard : "",
            debitCard : "",
            netBanking : "",
            slot : ""
        },
        customers : [],
        codetype : 0,
        index : ''
     } 
 
      
    handleChange = e => {
        const { currentTarget : input } = e;
        const customer = {...this.state.customer };
        input.type === "checkbox"
           ? (customer[input.name] = input.checked)
           : (customer[input.name] = input.value);
           if(input.checked === true){
             customer[input.name] = input.value
           }
        this.setState({ customer })
    } 
 
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.customer);
        console.log('Submitted')
        this.state.customers.push(this.state.customer)
        this.setState({ customers : this.state.customers , 
            customer : this.state.customer = {} ,
            codetype : 0 })
    }

    handleEdit = (data) => { 
        const index = this.state.customers.findIndex( val => val === data)
        console.log(index) 
        this.setState({  
             index : index,
             customer : data ,
             codetype : 3 
        }); 
    } 

    handleUpdate = (e) => {
        e.preventDefault();
        const index = this.state.index ;
        const customers = [...this.state.customers];
        customers[index] = this.state.customer;
        this.setState({customers });
        this.setState({ 
            customer : this.state.customer = {} ,
            codetype : 0 
        })
    }

    handleList = () => {
        this.setState({ codetype : 1 })
    }
    handleForm = () => {
            
        this.setState({ codetype : 2 , customer : this.state.customer = {  name : "",
                                                            gender : "",
                                                            delivery : "",
                                                            creditCard : "",
                                                            debitCard : "",
                                                            netBanking : "",
                                                            slot : ""} })
    }

    renderList(){
         if(this.state.customers.length === 0) return <div className="container"><h5>There are Zero customers</h5></div>

            return(
                <div>
                            <table class="table table-bordered table-sm">
                                    <thead style={{background: 'black',color:'white',textAlign: 'center'}}>
                                        <tr>
                                        <th scope="col" style={{width:'15%'}}>Name</th>
                                        <th scope="col" style={{width:'15%'}}>Gender</th> 
                                        <th scope="col" style={{width:'15%'}}>Delivery</th>
                                        <th scope="col" style={{width:'15%'}}>Payments</th>
                                        <th scope="col" style={{width:'15%'}}>Slot</th>
                                        <th scope="col" style={{width:'15%'}}></th>
                                        </tr>
                                    </thead>
                                <tbody style={{textAlign: 'center'}}>
                                    
                                     {this.state.customers.map((data, i) => {       
                                        return( 
                                        <tr key={i}>
                                            <td> {data.name} </td>
                                            <td> {data.gender}  </td>
                                            <td> {data.delivery} </td>
                                            <td> {data.creditCard} {data.debitCard} {data.netBanking} </td>
                                            <td> {data.slot} </td>
                                            <td> <button onClick={ () => this.handleEdit(data)} 
                                                className="btn btn-info btn-sm">Edit</button></td>
                                            </tr>
                                        );
                                    })  } 
                                </tbody>   
                            </table> 
                </div>
            )
    }

    render() { 
        const { customer } = this.state ;

        if(this.state.codetype === 0){
            return <div className="container">
                       <button onClick={this.handleForm} className="btn btn-primary btn-sm m-3">New Customer</button>
                       <button onClick={this.handleList} className="btn btn-primary btn-sm">List of Customers</button>
                       <h5 className="container">Welcome to the Customer System</h5>
                   </div>
        }if(this.state.codetype === 1){
            return <div className="container">
                       <button onClick={this.handleForm} className="btn btn-primary btn-sm m-3">New Customer</button>
                       <button onClick={this.handleList} className="btn btn-primary btn-sm">List of Customers</button>
                       {this.renderList()}
                   </div>
        }if(this.state.codetype === 2){
            return <div className="container">
                       <button onClick={this.handleForm} className="btn btn-primary btn-sm m-3">New Customer</button>
                       <button onClick={this.handleList} className="btn btn-primary btn-sm">List of Customers</button>

                        
            <div className="container">
                <form ref="myForm" className="myForm">
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                value={customer.name}
                                onChange={this.handleChange}  
                                name="name"
                                id="name" 
                                type="text" 
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
                              checked={customer.gender === "Male"}
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
                              checked={customer.gender === "Female"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="female">
                                 Female
                            </label>
                        </div>
                    </div>

                    <div>
                        <h5>Choose your Delivery Option</h5>
                        <div className="form-check form-check-inline">
                            <input
                              value="Home"
                              onChange={this.handleChange}
                              id="home"
                              name="delivery"
                              type="radio"
                              checked={customer.delivery === "Home"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="home">
                                 Home
                            </label>
                        </div>
                         <div className="form-check form-check-inline">
                            <input
                              value="Office"
                              onChange={this.handleChange}
                              id="office"
                              name="delivery"
                              type="radio"
                              checked={customer.delivery === "Office"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="office">
                                 Office
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                              value="Pickup"
                              onChange={this.handleChange}
                              id="pickup"
                              name="delivery"
                              type="radio"
                              checked={customer.delivery === "Pickup"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="pickup">
                                 Pickup
                            </label>
                        </div>
                    </div>

                        <div>
                            <h5>Choose your Payment Options</h5>
                            <div className="form-check">
                               <input
                                 value="Credit Card"
                                 onChange={this.handleChange}
                                 id="creditCard"
                                 name="creditCard"
                                 type="checkbox"
                                 checked={customer.creditCard}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="creditCard">
                                 Credit Card
                               </label>
                            </div>
                            
                             <div className="form-check">
                               <input
                                 value="Debit Card"
                                 onChange={this.handleChange}
                                 id="debitCard"
                                 name="debitCard"
                                 type="checkbox"
                                 checked={customer.debitCard}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="debitCard">
                                 Debit Card
                               </label>
                            </div>

                            <div className="form-check">
                               <input
                                 value="Net Banking"
                                 onChange={this.handleChange}
                                 id="netBanking"
                                 name="netBanking"
                                 type="checkbox"
                                 checked={customer.netBanking}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="netBanking">
                                 Net Banking
                               </label>
                            </div>
                        </div>

                        <select 
                            value={customer.slot}
                            onChange={this.handleChange}
                            id="slot"
                            name="slot"
                            className="form-control"
                        >
                            <option value="" selected disabled>
                                Select the Delivery Slot
                            </option>
                            <option>Before 10AM</option>
                            <option>12PM - 1PM</option>
                            <option>2PM - 6PM</option>
                        </select><br/>
                        <button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                </form>
            </div>
         
         </div>
        }if(this.state.codetype === 3){
            return <div className="container">
                       <button onClick={this.handleForm} className="btn btn-primary btn-sm m-3">New Customer</button>
                       <button onClick={this.handleList} className="btn btn-primary btn-sm">List of Customers</button>

                        
            <div className="container">
                <form ref="myForm" className="myForm">
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                value={customer.name}
                                onChange={this.handleChange}  
                                name="name"
                                id="name" 
                                type="text" 
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
                              checked={customer.gender === "Male"}
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
                              checked={customer.gender === "Female"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="female">
                                 Female
                            </label>
                        </div>
                    </div>

                    <div>
                        <h5>Choose your Delivery Option</h5>
                        <div className="form-check form-check-inline">
                            <input
                              value="Home"
                              onChange={this.handleChange}
                              id="home"
                              name="delivery"
                              type="radio"
                              checked={customer.delivery === "Home"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="home">
                                 Home
                            </label>
                        </div>
                         <div className="form-check form-check-inline">
                            <input
                              value="Office"
                              onChange={this.handleChange}
                              id="office"
                              name="delivery"
                              type="radio"
                              checked={customer.delivery === "Office"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="office">
                                 Office
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                              value="Pickup"
                              onChange={this.handleChange}
                              id="pickup"
                              name="delivery"
                              type="radio"
                              checked={customer.delivery === "Pickup"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="pickup">
                                 Pickup
                            </label>
                        </div>
                    </div>

                        <div>
                            <h5>Choose your Payment Options</h5>
                            <div className="form-check">
                               <input
                                 value="Credit Card"
                                 onChange={this.handleChange}
                                 id="creditCard"
                                 name="creditCard"
                                 type="checkbox"
                                 checked={customer.creditCard}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="creditCard">
                                 Credit Card
                               </label>
                            </div>
                            
                             <div className="form-check">
                               <input
                                 value="Debit Card"
                                 onChange={this.handleChange}
                                 id="debitCard"
                                 name="debitCard"
                                 type="checkbox"
                                 checked={customer.debitCard}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="debitCard">
                                 Debit Card
                               </label>
                            </div>

                            <div className="form-check">
                               <input
                                 value="Net Banking"
                                 onChange={this.handleChange}
                                 id="netBanking"
                                 name="netBanking"
                                 type="checkbox"
                                 checked={customer.netBanking}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="netBanking">
                                 Net Banking
                               </label>
                            </div>
                        </div>

                        <select 
                            value={customer.slot}
                            onChange={this.handleChange}
                            id="slot"
                            name="slot"
                            className="form-control"
                        >
                            <option value="" selected disabled>
                                Select the Delivery Slot
                            </option>
                            <option>Before 10AM</option>
                            <option>12PM - 1PM</option>
                            <option>2PM - 6PM</option>
                        </select><br/>
                        <button onClick={this.handleUpdate} className="btn btn-primary btn-sm">Submit</button>
                </form>
            </div>
         
         </div>
        }
        
    }
}
 
export default LoginCustomer;