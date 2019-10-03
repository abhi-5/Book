import React, { Component } from 'react';

class Codes extends Component {
    state = { 
        lists : [],
        addCode : "",
        codes : ['A','B','C',1,2,3]
     }
 
    handleAddCode = val => {
         this.setState({ addCode : this.state.addCode + val }) 
         console.log(this.state.addCode)      
     }

    handleLists = () => {
         const newlists = this.state.lists.slice();
         newlists.push(this.state.addCode);
         this.setState({ lists : newlists })
         this.setState({ addCode : this.state.addCode = "" })
                 
     }

    handleClearCode = () => {
         this.setState({ addCode : this.state.addCode = ""})
     }

    render() { 
        return ( 
        <div className="container">
            <h3>Create New Code</h3>
            <h5>Code so far : {this.formatAddCode()} </h5><br/>

            <div className="container">
                  {this.state.codes.map((val,i) => {
                      return (
                      <button onClick={ () => { this.handleAddCode(val)} } class="btn btn-warning mr-5" key={i}>{val}</button>
                      )
                  })}
                <br/><br/> 
                <button onClick={ this.handleLists } class="btn btn-primary mr-5">Add New Code</button>
                <button onClick={ this.handleClearCode } class="btn btn-primary">Clear Code</button>          
            </div><br/>

            <h3>List of Codes Created</h3>  
            <ul >{this.state.lists.map((val,i) => {
                return (
                    <li key={i}>{val}</li>
                )
                })} 
            </ul>
        
        </div> 
    );
    }

    formatAddCode(){
        const { addCode } = this.state;
        return addCode === 0 ? <h5></h5> : addCode ; 
    }
}

export default Codes;