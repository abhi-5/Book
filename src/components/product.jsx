import React, { Component } from 'react';
import { getProducts } from './prodTable';
import { Table } from 'reactstrap';

class Product extends Component {
    state = { 
        products : getProducts(),
        sales: [],
        codeType: 0,
        totalSales: [],
     }

 
                compareByAsc(key) {
                    return function (a, b) {
                    if (a[key] < b[key]) return -1;
                    if (a[key] > b[key]) return 1;
                    return 0;
                    };
                }
                
                sortByAsc(key) {
                    let arrayCopy = [...this.state.products];
                    arrayCopy.sort(this.compareByAsc(key));
                    this.setState({products: arrayCopy});
                }
    
                compareByDsc(key) {
                    return function (a, b) {
                    if (a[key] > b[key]) return -1;
                    if (a[key] < b[key]) return 1;
                    return 0;
                    };
                }

                 sortByDsc(key) {
                    let arrayCopy = [...this.state.products];
                    arrayCopy.sort(this.compareByDsc(key));
                    this.setState({products: arrayCopy});
                }
 
                           

                handleDetails = (val) => {
                    this.setState({ codeType : 1})
                    const products = this.state.products.filter( data => data.sales !== val );
                    this.setState({ products }); 

                    this.state.sales.push(val);
                    console.log(this.state.sales)
                    this.setState({ sales : this.state.sales });
                    
                }

                handleBack = () => {
                    this.setState({ codeType : 0})
                    this.setState({ sales : this.state.sales = []})
                }
               

    render() { 

        if(this.state.codeType === 0){
        return   <div className="container">
                <h3 style={{textAlign: 'center'}}>Products Store</h3><br/>
                     <button onClick={() => this.sortByAsc('product')} class="btn btn-primary btn-sm mr-5">SortBy Product</button>
                     <button onClick={() => this.sortByAsc('sales')} class="btn btn-primary btn-sm mr-5">SortBy TotalSales Asc</button> 
                     <button onClick={() => this.sortByDsc('sales')} class="btn btn-primary btn-sm">SortBy TotalSales Dsc</button><br/><br/>  
               
                <div class="table-responsive-md">
                 <table class="table" style={{ tabSize:'xs '}}>
                     <thead style={{textAlign: 'center', background:'black', color:'white'}}>
                        <tr>
                             <th scope="col">Products</th>
                             <th scope="col">Total Sales</th>
                             <th scope="col">Details</th>
                        </tr>
                      </thead>
                      <tbody style={{textAlign: 'center'}}>

                           {this.state.products.map((data, i) => {
                                         
                            return( 
                              <tr key={i}>
                              <td > {data.product} </td>
                              <td > {data.sales.reduce((a,b) => a+b) } </td>
                              <td > <button onClick={() => this.handleDetails(data)} class="btn btn-dark btn-sm">Details</button></td>
                          </tr>
                             );
                          })  } 
                      </tbody>
                 </table>
                 </div>                 
              </div>

        } else if(this.state.codeType === 1){
                return <div className="container">
                        <h4>Products Details</h4>
                        <div className="container">
                        <h6>Name : {this.state.sales.map((data) => data.product) }</h6>
                        <span >
                        <h6>Sales : </h6> <ul>{this.state.sales.map((data,i) => {
                                return (
                                <li  key={i}>{data.sales.map((data,i) => {
                                    return(
                                 <li key={i}>{data}</li>
                             )
                             })}</li>
                        )
                        })} 
                        </ul>
                        </span>
                <button onClick={this.handleBack} class="btn btn-primary btn-sm">BackToTable</button>
                 </div> 
                </div>
        }
           
    }


}
 
export default Product;