import React, { Component } from 'react';

class QuizCard extends Component {

    render() {  
    
        return (          
        
             <div className="col-sm-3">       
                 <div  className="card-body" style={{background: 'orange',textAlign: 'center'}}> 
                         <h5 className="card-title">Name : {this.props.data.name}</h5>
                         <h6 className="card-text">Score : {this.props.data.points}</h6>
                         <button  onClick= { () => this.props.onBuzzer(this.props.data.points)} 
                                     className="btn btn-light btn-sm m-2">BUZZER</button>
                           <br/> 
                 </div>     
                 <br/>
          </div>
      );
    }
}
 
export default QuizCard;