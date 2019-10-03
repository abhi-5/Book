import React, { Component } from 'react';

class Codes1 extends Component {
    state = { 
        codeType : -1,
        codeTypes : ['ABC123','0-9','MN012'],
        codemaker : [ ['A','B','C','1','2','3'],['0','1','2','3','4','5','6','7','8','9'],['M','N','0','1','2'] ],
        codes : [], 
        newCode : "",
        
     }

    handleAddCode = val => {
         this.setState({ newCode : this.state.newCode + val })       
     }

    handleLists = () => {
         
         const len = this.state.codes.length;
         for( var i=0; i<len; i++){ 
            if(this.state.codes[i] === this.state.newCode ){
               this.setState({ newCode : this.state.newCode = "" }) 
               alert('Code Already Exist...');

               if(this.state.newCode === "" ){
                  return this.setState({ codeType : this.state.codeType = -1 })
               }     
            }                
         }

         this.state.codes.push(this.state.newCode);
         this.setState({ codes : this.state.codes });
         this.setState({ newCode : this.state.newCode = "" })

         if(this.state.newCode === "" ){
              return this.setState({ codeType : this.state.codeType = -1 })
        }
    }

    handleClearCode = () => {
         this.setState({ newCode : this.state.newCode = ""})
         if(this.state.newCode === "" ){
            return this.setState({ codeType : this.state.codeType = -1 })
         }
     }
    
    handleCode1 = () => {
         this.setState({codeType : 0 })
    }
    
    handleCode2 = () => {
         this.setState({codeType : 1 })
    }

    handleCode3 = () => {
         this.setState({codeType : 2 })
    }

    render()  {  
    
         if(this.state.codeType === -1 ) {
            return  <div className="container">
                        <h3>Create New Code</h3><br/> 

                        <button onClick={ this.handleCode1 } class="btn btn-primary mr-5">Code:ABC123</button>
                        <button onClick={ this.handleCode2 } class="btn btn-primary mr-5">Code:0-9</button> 
                        <button onClick={ this.handleCode3 } class="btn btn-primary">Code:MN012</button><br/><br/>

                        <h3>List of Codes Created</h3>  
                         <ul >{this.state.codes.map((val,i) => {
                            return (
                                <li key={i}>{val}</li>
                            )
                            })} 
                        </ul> 
                
                    </div> 
         } else if(this.state.codeType === 0) {
             return <div className="container">
                        <h3>Create New Code</h3>
                        <h5>CodeTypes : ABC123 </h5>
                        <h5>Code so far : {this.formatAddCode()} </h5><br/>   

                        <div className="container">
                            {this.state.codemaker[0].map((val,i) => {
                                return (
                                <button onClick={ () => {this.handleAddCode(val)} } class="btn btn-warning mr-5" key={i}>{val}</button>
                                )
                            })}
                            <br/><br/> 
                            <button onClick={ this.handleLists } class="btn btn-primary mr-5">Add New Code</button>
                            <button onClick={ this.handleClearCode } class="btn btn-primary">Clear Code</button>          
                        </div><br/>

                         <h3>List of Codes Created</h3>  
                         <ul >{this.state.codes.map((val,i) => {
                            return (
                                <li key={i}>{val}</li>
                            )
                            })} 
                        </ul>
                    </div>
           
             } else if(this.state.codeType === 1) {
                   return <div className="container">
                        <h3>Create New Code</h3>
                        <h5>CodeTypes : 0-9 </h5>
                        <h5>Code so far : {this.formatAddCode()} </h5><br/>   

                        <div className="container">
                            {this.state.codemaker[1].map((val,i) => {
                                return (
                                <button onClick={ () => {this.handleAddCode(val)} } class="btn btn-warning mr-5" key={i}>{val}</button>
                                )
                            })}
                            <br/><br/> 
                            <button onClick={ this.handleLists } class="btn btn-primary mr-5">Add New Code</button>
                            <button onClick={ this.handleClearCode } class="btn btn-primary">Clear Code</button>          
                        </div><br/>

                         <h3>List of Codes Created</h3>  
                         <ul >{this.state.codes.map((val,i) => {
                            return (
                                <li key={i}>{val}</li>
                            )
                            })} 
                        </ul>
                    </div>
           
             } else if(this.state.codeType === 2) {
                  return <div className="container">
                        <h3>Create New Code</h3>
                        <h5>CodeTypes : MN012 </h5>
                        <h5>Code so far : {this.formatAddCode()} </h5><br/>   

                        <div className="container">
                            {this.state.codemaker[2].map((val,i) => {
                                return (
                                <button onClick={ () => {this.handleAddCode(val)} } class="btn btn-warning mr-5" key={i}>{val}</button>
                                )
                            })}
                            <br/><br/> 
                            <button onClick={ this.handleLists } class="btn btn-primary mr-5">Add New Code</button>
                            <button onClick={ this.handleClearCode } class="btn btn-primary">Clear Code</button>          
                        </div><br/>
                        <h3>List of Codes Created</h3>  
                         <ul >{this.state.codes.map((val,i) => {
                            return (
                                <li key={i}>{val}</li>
                            )
                            })} 
                        </ul>
                        
                    </div>
           
             }
                  
    }

    formatAddCode(){
        const { newCode } = this.state;
        return newCode === 0 ? <h5></h5> : newCode ; 
    }
}
 
export default Codes1;