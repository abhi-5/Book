import React, { Component } from 'react';

class RctSet3 extends Component {
    state = { 
        items : [
            { name:'Liril', stock:10, sales:7, price:10 },
            { name:'Dove', stock:20, sales:9, price:20 },
            { name:'Pears', stock:35, sales:20, price:15 },
            { name:'Surf', stock:45, sales:22, price:55 },
            { name:'Ariel', stock:20, sales:7, price:40 },
            { name:'Tide', stock:20, sales:11, price:35 },
            { name:'Nirma', stock:30, sales:21, price:20 },
        ]
     }
    render() { 
        return ( 
            <div className="container"><br/>
                <h4 className="text-center">Daily Sales Report for XYZ Enterprises</h4>
                <div className="row bg-dark text-white">
                   <div className="col-2 border">Name</div>
                   <div className="col-2 border">Stock</div>
                   <div className="col-2 border">Sales</div>
                   <div className="col-2 border">Stock Left</div>
                   <div className="col-2 border">Price</div>
                   <div className="col-2 border">Sales Value</div>
                </div>
                {this.state.items.map(item => (
                    <div className="row">
                       <div className="col-2 border bg-light">{item.name}</div>
                       <div className="col-2 border">{item.stock}</div>
                       <div className="col-2 border">{item.sales}</div>
                       <div className="col-2 border">{item.stock-item.sales}</div>
                       <div className="col-2 border">{item.price}</div>
                       <div className="col-2 border">{item.sales*item.price}</div>
                    </div>
                ))}
                <div className="row border bg-light">
                    <div className="col-3 border text-center">
                    Max Seller by Quantity <br/>
                    Name : Surf<br/>
                    Quantity : 22
                    </div>
                    <div className="col-3 border text-center">
                    Max Seller by Value <br/>
                    Name : Surf<br/>
                    Quantity : 1210
                    </div>
                    <div className="col-3 border text-center">
                    Min Seller by Quantity <br/>
                    Name : Liril<br/>
                    Quantity : 7 
                    </div>
                    <div className="col-3 border text-center">
                    Min Seller by Value <br/>
                    Name : Liril<br/>
                    Quantity : 70
                    </div>
                </div>
                <div className="row border bg-light">
                    <div className="col-12 text-center">
                    Number of Products : 7<br/>
                    Total Stock by Quantity : 180<br/>
                    Total Stock by Value : 5600<br/>
                    Total Sales by Quantity : 98<br/>
                    Total Sales by Value : 2885<br/>
                    </div>
                </div>
                <div className="row text-center bg-light border p-3">
                    <div className="col-12">
                        <button className="btn btn-primary">Close the Shop for the Day</button>
                    </div>
               </div>
            </div>
         );
    }
}
 
export default RctSet3;