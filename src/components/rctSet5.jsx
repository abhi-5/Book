import React, { Component } from 'react';

class RctSet5 extends Component {
    state = { 
        upper : [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        lower : [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        digit : [ '1','2','3','4','5','6','7','8','9','0'],
        special:[ '@','#','$','%','&','*','(',')'],
        codetype : 0,
        text : ""
     }

    handleUpperCode = data => {
        this.setState({ text : this.state.text + data })
    }
    handleLowerCode = data => {
        this.setState({ text : this.state.text + data })
    }
    handleDigitCode = data => {
        this.setState({ text : this.state.text + data })
    }
    handleSpecialCode = data => {
        this.setState({ text : this.state.text + data })
    }
    handleUpper = () => {
        this.setState({ codetype : 1 })
    }
    handleLower = () => {
        this.setState({ codetype : 2 })
    }
    handleDigit = () => {
        this.setState({ codetype : 3 })
    }
    handleSpecial = () => {
        this.setState({ codetype : 4 })
    }

    renderTags(){
        return ( 
            <div className="text-center">
                  <button onClick={this.handleUpper} className="btn btn-primary m-2">UpperCase</button>
                  <button onClick={this.handleLower} className="btn btn-primary m-2">LowerCase</button>
                  <button onClick={this.handleDigit} className="btn btn-primary m-2">Digits</button>
                  <button onClick={this.handleSpecial} className="btn btn-primary m-2">Special</button><br/>
            
                    <div className="col-10 " style={{paddingLeft:'10em'}}>
                            <div className="col-20 border">  
                               <h5 className="text-left"> Text : {this.formatText()}</h5>
                            </div> 
                    </div>
                </div>  
        );
    }

    render() {         
       if(this.state.codetype === 0){
        return <div className="container">
                    {this.renderTags()}
               </div> 
       }if(this.state.codetype === 1){
        return <div className="container">
                            {this.renderTags()}<br/>
                            <div className="container">
                                <div className="col-10" style={{paddingLeft:'10em'}}>
                            <div className="row text-white">
                             {this.state.upper.map(data => {
                                return (
                                    <button onClick={() => this.handleUpperCode(data)} type="button" style={{background:'black' , color:'white' , width:'8%'}}>
                                        {data}</button> 
                                );
                            })}
                             </div>
                             </div>
                             </div>
               </div> 
       }if(this.state.codetype === 2){
        return <div className="container">
                            {this.renderTags()}<br/>
                            <div className="container">
                            <div className="col-10" style={{paddingLeft:'10em'}}>
                            <div className="row text-white">
                             {this.state.lower.map(data => {
                                return (
                                    <button onClick={() => this.handleLowerCode(data)} type="button" style={{background:'black' , color:'white' , width:'8%'}}>
                                        {data}</button> 
                                );
                            })}
                             </div>
                             </div>
                             </div>
            
                </div> 
       }if(this.state.codetype === 3){
        return <div className="container">
                            {this.renderTags()}<br/>
                            <div className="container">
                            <div className="col-10" style={{paddingLeft:'10em'}}>
                            <div className="row text-white">
                             {this.state.digit.map(data => {
                                return (
                                    <button onClick={() => this.handleDigitCode(data)} type="button" style={{background:'black' , color:'white' , width:'8%'}}>
                                        {data}</button> 
                                );
                            })}
                             </div>
                             </div>
                             </div>
                </div>
       }if(this.state.codetype === 4){
        return <div className="container">
                             {this.renderTags()}<br/>
                            <div className="container">
                            <div className="col-10" style={{paddingLeft:'10em'}}>
                            <div className="row text-white">
                             {this.state.special.map(data => {
                                return (
                                    <button onClick={() => this.handleSpecialCode(data)} type="button" style={{background:'black' , color:'white' , width:'8%'}}>
                                        {data}</button> 
                                );
                            })}
                             </div>
                             </div>
                             </div>
                 </div> 
       }

    }

    formatText(){
        const { text } = this.state;
        return text === 0 ? <span></span> : text ; 
    }
}
 
export default RctSet5;