import React, { Component } from 'react';

class Book extends Component {

    render() {  
        return (          
        
             <div className="col-sm-6">       
                 <div  className="card-body" style={{background: 'pink',textAlign: 'center'}}> 
                         <h5 className="card-title">{this.props.book.name}</h5>
                         <h6 className="card-text">{this.props.book.author}</h6>
                         <button  onClick= { () => this.props.onIssue(this.props.book)} 
                                     className="btn btn-secondary btn-sm m-2">Issue</button>
                           <br/> 
                 </div>     
                 <br/>
          </div>
      );
    }
}
 
export default Book;