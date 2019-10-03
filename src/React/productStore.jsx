import React, { Component } from 'react';
import NavBar from './navbar';
import Input from './input';

class ProductStore extends Component {
    state = { 
        brands : ["Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia", "Cadburys", "P&G", "Colgate", "Parachute",
                  "Gillete", "Dove", "Levis", "Van Heusen", "Manyavaar", "Zara"],
        products : [
						{
								code: "PEP1253", price: 20, brand: "Pepsi", category: "Food",
								specialOffer: false, limitedStock: false, quantity: 25
						},
						{
								code: "MAGG021", price: 25, brand: "Nestle", category: "Food",
								specialOffer: true, limitedStock: true, quantity: 10
						},
						{
								code: "LEV501", price: 1000, brand: "Levis", category: "Apparel",
								specialOffer: true, limitedStock: true, quantity: 3
						},
						{
								code: "CLG281", price: 60, brand: "Colgate", category: "Personal	Care",
								specialOffer: true, limitedStock: true, quantity: 5
						},
						{
								code: "MAGG451", price: 25, brand: "Nestle", category: "Food",
								specialOffer: true, limitedStock: true, quantity: 0
						},
						{
								code: "PAR250", price: 40, brand: "Parachute", category: "Personal	Care",
								specialOffer: true, limitedStock: true, quantity: 5
						}
                    ],
                    codetype : 0,
                    index : '',
                    product : {
                       code : '',
                       price : '',
                       category : '',
                       brand : '',
                       specialOffer : '',
                       limitedStock : '',
                       quantity : 0 
                    },
                    errors : {}

     }

    handleEdit = data => {
        const index = this.state.products.findIndex( val => val === data)
        console.log(index) 
        this.setState({  
             index : index,
             product : data ,
             codetype : 2 
        }); 
    }

    handleUpdate = (e) => {
        e.preventDefault();
            console.log(this.state.product)
            const index = this.state.index ;
            const products = [...this.state.products];
            products[index] = this.state.product;
            this.setState({products });
            this.setState({ 
                product : this.state.product = {} ,
                codetype : 0 
            })
    }

    handleAddNewProd = () => {
       this.setState({ codetype : 1 }) 
    }

    handleChange = e => {
        const { currentTarget : input } = e;
        const product = {...this.state.product };
        input.type === "checkbox"
           ? (product[input.name] = input.checked)
           : (product[input.name] = input.value);
           
        this.setState({ product })
        console.log(this.state.product)
    }

    // handleIndex = e => {
    //     const { currentTarget : input } = e;
    //     const product = {...this.state.product };
    //     product[input.name] = input.value;
    //     const index = this.state.products.findIndex(val => val.code === input.value)
    //     console.log(index)
    //     const abc = this.state.products.find(val => val.code === input.value)
    //     console.log(abc)
    //     this.setState({ 
    //         index : index ,
    //         product : this.state.product = abc 
    //     })
    // }

    handleChangeStock = e => {
        const { currentTarget : input } = e;
        const product = {...this.state.product };
        product[input.name] = input.value;
        this.setState({ product })
         console.log(input.value);  
         console.log(this.state.product)  
         
          const index = this.state.products.findIndex(val => val.code === input.value)
            console.log(index)
            const abc = this.state.products.find(val => val.code === input.value)
            console.log(abc)
            this.setState({ 
            index : index ,
            // product : this.state.product = abc 
        })
    }

     handleUpdateStock = (e) => {
        e.preventDefault();
        if(this.state.product.code === ''){
            alert('Select the Product')
        }else if(this.state.product.quantity === ''){
            alert('Enter the Quantity')
        }else{
            console.log(this.state.product)
            const index = this.state.index ;
            const products = [...this.state.products];
            products[index] = this.state.product;
            this.setState({products });
            this.setState({ 
                product : this.state.product = {} ,
                codetype : 0 
            })
        }
            
    }

    validate = () => {
        const errors = {};
        const { product } = this.state;
        if(product.code.trim() === '')
            errors.code = 'Product Code is required';
        if(product.price.trim() === '')
            errors.price = 'Price is required';

         return Object.keys(errors).length === 0 ? null : errors;
    }
    

    handleSubmit = e => {
         e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} })
        if (errors) return;

        if(this.state.product.category === ''){
            alert('Category is required')
            this.setState({ codetype : 1})
        }else if(this.state.product.brand === ''){
            alert('Brand is required')
            this.setState({ codetype : 1}) 
        }else if(this.state.product.code === ''){
            alert('Select the Product')
            this.setState({ codetype : 3})
        }
        else{
            console.log(this.state.product);
            this.state.products.push(this.state.product);
            this.setState({ products : this.state.products, codetype : 0})
        }      
    }

    handleStock = () => {
        this.setState({ codetype : 3 })
    }

   
    handleHomePage = e => {
         e.preventDefault(); 
         this.setState({ codetype : 0})      
    }

    renderForm() {
        const { product, errors } = this.state;
        return (
        <div className="container">
                    <form ref="myForm" className="myForm">
                             <Input
                                name="code"
                                value={product.code}
                                label="Product Code"
                                onChange={this.handleChange} 
                                error={errors.code}
                            />
                    
                            <Input
                                name="price"
                                value={product.price}
                                label="Price"
                                onChange={this.handleChange} 
                                error={errors.price}
                            />
                    <div>
                        <h5>Category</h5>
                        <div className="form-check form-check-inline">
                            <input
                                value="Food"
                                onChange={this.handleChange}
                                id="food"
                                name="category"
                                type="radio"
                                checked={product.category === "Food"}
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="food">
                                 Food
                            </label>
                        </div>
                         <div className="form-check form-check-inline">
                            <input
                                value="Personal Care"
                                onChange={this.handleChange}
                                id="personalCare"
                                name="category"
                                type="radio"
                                checked={product.category === "Personal Care"}
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="personalCare">
                                 Personal Care
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                value="Apparel"
                                onChange={this.handleChange}
                                id="apparel"
                                name="category"
                                type="radio"
                                checked={product.category === "Apparel"}
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="apparel">
                                 Apparel
                            </label>
                        </div>
                    </div>

                        <select 
                            value={product.brand}
                            onChange={this.handleChange}
                            id="brand"
                            name="brand"
                            className="form-control"
                        >
                            <option value="" selected disabled>Select Brand</option>
                            {this.state.brands.map((data,i) => {
                                return (
                                    <option key={i}>{data}</option>
                                )
                            })}
                        </select>

                        <div>
                            <h5>Choose other info about the product</h5>
                            <div className="form-check">
                               <input
                                 value={product.specialOffer}
                                 onChange={this.handleChange}
                                 id="specialOffer"
                                 name="specialOffer"
                                 type="checkbox"
                                 checked={product.specialOffer}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="specialOffer">
                                  Special Offer
                               </label>
                            </div>
                            
                             <div className="form-check">
                               <input
                                 value={product.limitedStock}
                                 onChange={this.handleChange}
                                 id="limitedStock"
                                 name="limitedStock"
                                 type="checkbox"
                                 checked={product.limitedStock}
                                 className="form-check-input"
                               />
                               <label className="form-check-label" htmlFor="limitedStock">
                                 Limited Stock 
                               </label>
                            </div>
                        </div><br/>
                        
                    </form>
                    </div>
        );
    }

    renderNav() {
          return(
              <NavBar 
                    products={this.state.products.length}
                    quantity={this.state.products.reduce((a,b) => a + b.quantity, 0 )}
                    value={this.state.products.map(function(data) {
                          const arr = { value : data.price*data.quantity } ;
                          return arr;
                    }).reduce((a,b) => a + b.value , 0)
                    }
                />
          )
    }

    render() {
        const { product } = this.state;

        if(this.state.codetype === 0){ 
        return  <div className="container">
                {this.renderNav()}
                <br/>
                <div className="row text-center">
                    {this.state.products.map((data,i) => {
                        return(
                           <div className="col-3 border text-center bg-light">
                                <h5>Code : {data.code}</h5>
                                Brand : {data.brand}<br/>
                                Category : {data.category}<br/>
                                Price : {data.price}<br/>
                                Quantity : {data.quantity}<br/>
                                Special Offers : {data.specialOffer}<br/>
                                Limited Stocks : {data.limitedStock}<br/> 
                                <button onClick={ () => this.handleEdit(data) } className="btn btn-warning btn-md">
                                                    Edit Details</button>
                           </div>
                        );
                    })}
                </div> 
                <br/>
                     <button onClick={this.handleAddNewProd} className="btn btn-primary btn-md m-2">Add New Product</button>
                     <button onClick={this.handleStock} className="btn btn-primary btn-md">Receive Stocks</button>

            </div>
        }if(this.state.codetype === 1){
            return <div className="container">
                   {this.renderNav()}
                    <br/>
                    {this.renderForm()}
                    <button onClick={this.handleSubmit} className="btn btn-primary btn-md">Add Product</button><br/><br/>
                    <button onClick={this.handleHomePage} className="btn btn-primary btn-md">Go back to Home Page</button>

                </div>
        }if(this.state.codetype === 2){
            return <div className="container">
                    {this.renderNav()}
                    <br/>
                    {this.renderForm()}
                    <button onClick={this.handleUpdate} className="btn btn-primary btn-md">Update Details</button><br/><br/>
                    <button onClick={this.handleHomePage} className="btn btn-primary btn-md">Go back to Home Page</button>

                </div>
        }if(this.state.codetype === 3){
            return  <div className="container">
                    {this.renderNav()}
                    <br/>
                    <div className="container">
                        <form ref="myForm" className="myForm">
                            <h5>Select the product whose stocks have been received</h5>
                        <select 
                            value={product.code}
                          //  onChange={this.handleIndex}
                            onChange={this.handleChangeStock}
                            id="code"
                            name="code"
                            className="form-control"
                        >
                            <option value="" selected disabled>Select Product Code</option>
                            {this.state.products.map((data,i) => {
                                return (
                                    <option key={i}>{data.code}</option>
                                )
                            })}
                        </select>

                         <div className="form-group">
                             <label>Stocks Received</label>
                            <input 
                                value={product.quantity}
                                onChange={this.handleChangeStock}
                                name="quantity"
                                id="quantity" 
                                type="number" 
                                className="form-control" 
                            />
                        </div>
                        </form>
                    <button onClick={this.handleUpdateStock} className="btn btn-primary btn-md">Submit</button><br/><br/>
                    <button onClick={this.handleHomePage} className="btn btn-primary btn-md">Go back to Home Page</button>

                    </div>
                    </div>
        }
    }
}
 
export default ProductStore;