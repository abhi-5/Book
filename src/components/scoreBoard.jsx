import React, { Component } from 'react';

class Counter extends Component {
    state = {
        scoreA: 0,
        scoreB: 0
    };
        
     handle3PointsA = () => {
         this.setState({ scoreA: this.state.scoreA + 3 })
     }
     handle2PointsA = () => {
         this.setState({ scoreA: this.state.scoreA + 2 })
     }
     handleFreeThrowA = () => {
         this.setState({ scoreA: this.state.scoreA + 1 })
     }   
             
        
     handle3PointsB = () => {
         this.setState({ scoreB: this.state.scoreB + 3 })
     }
     handle2PointsB = () => {
         this.setState({ scoreB: this.state.scoreB + 2 })
     }
     handleFreeThrowB = () => {
         this.setState({ scoreB: this.state.scoreB + 1 })
     }
      handleReset = () => {
         this.setState({ scoreA: this.state.scoreA = 0 })
         this.setState({ scoreB: this.state.scoreB = 0 })
     }
 
    render() { 
        return (  
           
                  
    <div class="container">
    <div class="row">
      
      <div class="col-md-12 col-lg-4" style={{textAlign: 'center'}}>
        
            <h8 >Team A</h8><br/>
            <p style={{fontSize: '500%'}}>{this.formatScoreA()} </p><br/>
            <div><button  onClick={this.handle3PointsA} style={{width:'50%'}} className="btn btn-warning btn-sm">+3 POINTS</button></div><br/>
            <div><button  onClick={this.handle2PointsA} style={{width:'50%'}} className="btn btn-warning btn-sm">+2 POINTS</button></div><br/>
            <div><button  onClick={this.handleFreeThrowA} style={{width:'50%'}} className="btn btn-warning btn-sm">FREE THROW</button></div><br/>
          
      </div>
      <div class="col-md-12 col-lg-4" style={{textAlign: 'center'}}> 
        
            <h8 >Team B</h8><br/>
            <p style={{fontSize: '500%'}}>{this.formatScoreB()} </p><br/>
            <div><button  onClick={this.handle3PointsB} style={{width:'50%'}} className="btn btn-warning btn-sm">+3 POINTS</button></div><br/>
            <div><button  onClick={this.handle2PointsB} style={{width:'50%'}} className="btn btn-warning btn-sm">+2 POINTS</button></div><br/>
            <div><button  onClick={this.handleFreeThrowB} style={{width:'50%'}} className="btn btn-warning btn-sm">FREE THROW</button></div><br/>
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
export default Counter; 



