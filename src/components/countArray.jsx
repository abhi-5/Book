import React, { Component } from 'react';

class CountArray extends Component {
    state = { 
        count : 0,
        array : []
     }  

     handleReset = () => {
         const newArray = this.state.array.slice();
         newArray.push(this.state.count);
         this.setState({ array : newArray })
         this.setState({ count : this.state.count = 0 })
     }

     handleIncrement = () => {
         this.setState({ count : this.state.count + 1 })
     }

     handleDecrement = () => {
         this.setState({ count : this.state.count - 1 })
     }

        render() { 
        return ( 
        <div className="container">

            <button onClick={this.handleIncrement} className="btn btn-success btn-sm">Increment</button>
            <button onClick={this.handleDecrement} className="btn btn-danger btn-sm">Decrement</button> 
            <button onClick={this.handleReset} className="btn btn-primary btn-sm">Reset</button><br/>
            <span >{this.formatCount()}</span>
            <span >
            <ul >{this.state.array.map((val,i) => {
                return (
                    <li className={this.colorChange()} key={i}>{val}</li>
                )
                })} 
            </ul>
            </span>
            <span>{this.state.array.length === 0 && "Starting the System"}</span>
        </div> 
        );
    }
         
        colorChange(){
            let setClass;
            if(this.state.array > 0){
               return setClass = 'text-success'
            }
            else if(this.state.array < 0){ 
               return  setClass = 'text-danger'
            }
            else if(this.state.array == 0){
               return  setClass = 'text-primary'
            }
            
        }

               
        formatCount(){
            const {count} = this.state;
            return count === 0 ? "Zero" : count;
        }
 
}
 
export default CountArray;