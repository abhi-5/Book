import React, { Component } from 'react';

class RctSet2 extends Component {
    state = { 
        products : [
            { name:'Liril', quantity:10, sales:7, price:10 },
            { name:'Dove', quantity:20, sales:9, price:20 },
            { name:'Pears', quantity:35, sales:20, price:15 },
            { name:'Surf', quantity:45, sales:22, price:55 },
            { name:'Ariel', quantity:20, sales:7, price:40 },
            { name:'Tide', quantity:20, sales:11, price:35 },
            { name:'Nirma', quantity:30, sales:21, price:20 },
        ]
     }

    render() { 
        return ( 
             <div className="container"><br/>
                 <h4>Sales less than 20, Sorted By Price (desc)</h4>
                            <table class="table table-bordered table-sm"> 
                                <thead style={{background: 'black',color:'white'}}>
                                        <tr>
                                        <th scope="col" style={{paddingLeft: '1em', width:'40%'}}>Name</th>
                                        <th scope="col" style={{paddingLeft: '1em'}}>Stock</th> 
                                        <th scope="col" style={{paddingLeft: '1em'}}>Sales</th>
                                        <th scope="col" style={{paddingLeft: '1em'}}>Price</th>
                                        </tr>
                                </thead>         
                                <tbody >       
                                     {this.state.products.filter(data => data.sales < 20)
                                     .sort((a,b) => b.price > a.price)
                                     .map((data, i) => {       
                                        return( 
                                        <tr key={i}>
                                            <td className="bg-light" style={{paddingLeft: '1em'}}> {data.name} </td>
                                            <td style={{paddingLeft: '1em'}}> {data.quantity}  </td>
                                            <td style={{paddingLeft: '1em'}}> {data.sales} </td>
                                            <td style={{paddingLeft: '1em'}}> {data.price}</td> 
                                        </tr>
                                        );
                                    })  } 
                                </tbody>    
                            </table> 
                </div>
         );
    }
}
 
export default RctSet2;