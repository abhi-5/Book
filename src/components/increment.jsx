import React, { Component } from 'react';

class Increment extends Component {
    state = { 
        count: 0,
     };

     handleIncrement = () => {
         this.setState({ count : this.state.count + 1 })
     }

     handleDecrement = () => {
         this.setState({ count : this.state.count - 1 })
     }

     handleReset = () => {
         this.setState({ count : this.state.count  = 0 })
     }
    render() { 
        return ( 
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-success btn-sm">Increment</button>
                <button onClick={this.handleDecrement} className="btn btn-danger btn-sm">Decrement</button>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm">Reset</button>
            </div>
         );
    }
        getBadgeClasses(){
            let classes = "badge m-2 badge-";
            classes += this.state.count < 0 || this.state.count === 0 ? "warning" : "primary" || "danger" ;
            return classes;
        }

        formatCount(){
            const {count} = this.state;
            return count === 0 ? "Zero" : count;
        }
}
 
export default Increment;