import React, { Component } from 'react';
import CounterIncrement from './counterIncrement';

class Counters extends Component {
   

    render() { 
        return ( 
         <div className="container">
             <button onClick= {this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>

            {this.props.counters.map(counter => (
                <CounterIncrement 
                  key={counter.id} 
                  onIncrement={this.props.onIncrement}
                  onDelete={this.props.onDelete}
                  counter={counter}
                  />
                
                ))}
         </div> 
          );
    }
}
 
export default Counters;