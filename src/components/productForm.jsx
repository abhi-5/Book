import React, { Component } from 'react';
import Input  from './input';

class ProductForm extends Component {
    state = {  
        product : {
            name : '',
            description : '',
            category : '',
            price : '',
            discount : ''
        },
        errors : {}
    }

    validate = () => {
        const errors = {};
        const { product } = this.state;
        if(product.name.trim() === ''){
            errors.name = 'Required, minimum 5 characters';
        }else if(product.name.length < 5){
            errors.name = 'Required, minimum 5 characters';
        }

        if(product.description.trim() === ''){
            errors.description = 'Required, minimum 20 characters';
        }else if(product.description.length < 20){
            errors.description = 'Required, minimum 20 characters';
        }

        if(product.category.trim() === ''){
            errors.category = 'Required';
        }

        if(product.price.trim() === ''){
            errors.price = 'Required, should be a number';
        }else if( !/^\+?(0|[1-9]\d*)$/.test(product.price) ){
            errors.price = 'Required, should be a number';
        }

        if(product.discount.trim() === ''){
            errors.discount = 'Required (one of them should be checked)';
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
        console.log(this.state.product)

    };

    handleChange = ({ currentTarget: input}) => {
        const product = {...this.state.product};
        product[input.name] = input.value;
        this.setState({ product });
    }

    render() { 
        const { product, errors } = this.state;

        return ( 
            <div className="container">
                <h4>Product Details</h4>
                <form onSubmit={this.handleSubmit}>
                   <Input
                      name="name"
                      value={product.name}
                      label="Name :"
                      onChange={this.handleChange} 
                      error={errors.name}
                   />
                    <Input
                      name="description"
                      value={product.description}
                      label="Description :"
                      onChange={this.handleChange} 
                      error={errors.description}
                   />
                   <div className="form-group">
                    <label className="form-check-label" htmlFor="category">
                        Category : 
                    </label>
                    <select 
                            value={product.category}
                            onChange={this.handleChange}
                            id="category"
                            name="category"
                            className="form-control"
                        >
                            <option value="" disabled>
                                Select the Category
                            </option>
                            <option>Food</option>
                            <option>Electronics</option>
                            <option>Apparels</option>
                            <option>Grocery</option>
                        </select>
                        { errors.category && <div className="alert alert-danger">{errors.category}</div> }
                        </div>
                    <Input
                      name="price"
                      value={product.price}
                      label="Price :"
                      onChange={this.handleChange} 
                      error={errors.price}
                   />
                   <div>
                        <label className="form-check-label" htmlFor="discount">
                                Discount :  
                        </label>
                        <div className="form-check form-check-inline">
                            <input
                              value="5%"
                              onChange={this.handleChange}
                              id="5%"
                              name="discount"
                              type="radio"
                              checked={product.discount === "5%"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="5%">
                                 5%
                            </label>
                        </div>
                         <div className="form-check form-check-inline">
                            <input
                              value="10%"
                              onChange={this.handleChange}
                              id="10%"
                              name="discount"
                              type="radio"
                              checked={product.discount === "10%"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="10%">
                                 10%
                            </label>
                        </div>
                         <div className="form-check form-check-inline">
                            <input
                              value="15%"
                              onChange={this.handleChange}
                              id="15%"
                              name="discount"
                              type="radio"
                              checked={product.discount === "15%"}
                              className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="15%">
                                 15%
                            </label>
                        </div>
                        { errors.discount && <div className="alert alert-danger">{errors.discount}</div> }
                        </div><br/>
                    
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
         );
    }
}
 
export default ProductForm;