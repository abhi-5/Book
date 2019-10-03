import React, { Component } from 'react';

class scoreBoard1 extends Component {
    state = {
        scoreA: 0, 
        scoreB: 0 
    };
 
    handleScore = val => {
         console.log(val)
         if(val.scoreA){
         this.setState({scoreA : this.state.scoreA + val.scoreA })
         } 
         else if ( val.scoreB){ 
         this.setState({scoreB : this.state.scoreB + val.scoreB })
         }           
    }   
    
    handleReset = () => {
         this.setState({scoreA : this.state.scoreA = 0 })
         this.setState({scoreB : this.state.scoreB = 0 })
     }   
     
    render() { 
        return (  
           
                  
    <div class="container">
    <div class="row">
      
      <div class="col-md-12 col-lg-4" style={{textAlign: 'center'}}>
        
            <h8 >Team A</h8><br/>
            <p style={{fontSize: '500%'}}>{this.formatScoreA()} </p><br/>
            <div><button  onClick={() => this.handleScore({ scoreA : 3 }) } style={{width:'50%'}} className="btn btn-warning btn-sm">+3 POINTS</button></div><br/>
            <div><button  onClick={() => this.handleScore({ scoreA : 2 }) } style={{width:'50%'}} className="btn btn-warning btn-sm">+2 POINTS</button></div><br/>
            <div><button  onClick={() => this.handleScore({ scoreA : 1 }) } style={{width:'50%'}} className="btn btn-warning btn-sm">FREE THROW</button></div><br/>
          
      </div>
      <div class="col-md-12 col-lg-4" style={{textAlign: 'center'}}> 
        
            <h8 >Team B</h8><br/>
            <p style={{fontSize: '500%'}}>{this.formatScoreB()} </p><br/>
            <div><button  onClick={() => this.handleScore({ scoreB : 3 }) } style={{width:'50%'}} className="btn btn-warning btn-sm">+3 POINTS</button></div><br/>
            <div><button  onClick={() => this.handleScore({ scoreB : 2 }) } style={{width:'50%'}} className="btn btn-warning btn-sm">+2 POINTS</button></div><br/>
            <div><button  onClick={() => this.handleScore({ scoreB : 1 }) } style={{width:'50%'}} className="btn btn-warning btn-sm">FREE THROW</button></div><br/>
      </div>
      </div>
             <div class="col-md-6 col-lg-8"  style = {{textAlign : 'center'}} ><button onClick={this.handleReset} style={{width:'25%'}} className="btn btn-warning btn-sm">RESET</button></div><br/>
      </div>
        );
    } 
      
formatScoreA(){
    const { scoreA } = this.state;
    return scoreA === 0 ? <p>0</p> : scoreA ; 
   }
formatScoreB(){
    const { scoreB } = this.state;
    return scoreB === 0 ? <p>0</p> : scoreB ; 
   }
}
export default scoreBoard1; 



